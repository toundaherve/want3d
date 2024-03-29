import needModel from "../../db/Need";

async function postHandler(req, res) {
  const data = req.body;

  try {
    const need = await needModel.create(data);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify({
        error: false,
        ID: need.id,
      })
    );
    res.end();
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify({
        error: true,
        message: "Internal server error",
      })
    );
    res.end();
    return;
  }
}

async function getHandler(req, res) {
  const {search, page, perPage, sortBy, sortOrder, category} = getSearchParams(req)

  if (!search) {
    res.writeHead(400);
    res.write(
      JSON.stringify({
        error: true,
        message: "Missing search text",
      })
    );
    res.end()
    return
  }

  const {limit, offset} = getPagination(page, perPage)

  try {
    let results = await needModel.findAndCountAll(search, limit, offset, sortBy, sortOrder, category);

    removeUnecessaryProperties(results.rows)

    stringifyTimestamps(results.rows)
    
    const response = getPagingData(results, page, limit)

    const categories = await needModel.getCategoriesForItem(search)
    response.categories = categories

    res.writeHead(200);
    res.write(
      JSON.stringify(response)
    );
    res.end()
  } catch (error) {
    res.writeHead(500);
    res.write(
      JSON.stringify({
        error: true,
        message: "Internal server error",
      })
    );
    res.end()
    return
  }
}

export default function handler(req, res) {
  if (req.method === "POST") {
    postHandler(req, res);
    return;
  }

  if (req.method === "GET") {
    getHandler(req, res)
    return 
  } 

  res.writeHead(200)
  res.end()
}

function getPagination(page, perPage) {
  const limit = perPage ? perPage : 10;
  const offset = page ? (--page) * perPage : 0;
  
  return {limit, offset}
}

function getPagingData(data, page, limit) {
  const {count: totalNeeds, rows: needs} = data;
  const currentPage = page ? page : 0
  const totalPages = Math.ceil(totalNeeds / limit)

  return { totalNeeds, needs, totalPages, currentPage}
}

function getSearchParams(req) {
  const url = new URL(req.url, `http://${req.headers.host}`)
  const search = url.searchParams.get("search")
  const page = url.searchParams.get("page")
  const perPage = url.searchParams.get("per_page")
  const sortBy = url.searchParams.get("sort_by")
  const sortOrder = url.searchParams.get("sort_order")
  const category = url.searchParams.get("category")

  return {search, page, perPage, sortBy, sortOrder, category}
} 

function removeUnecessaryProperties(needs) {
  needs.forEach((need) => {
    delete need.updatedAt;
  });
}

function stringifyTimestamps(needs) {
  needs.forEach((need) => {
    need.createdAt = JSON.stringify(need.createdAt)
  });
}