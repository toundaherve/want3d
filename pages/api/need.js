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
  const url = new URL(req.url, `http://${req.headers.host}`)
  const search = url.searchParams.get("search")
  const page = url.searchParams.get("page")
  const perPage = url.searchParams.get("per_page")

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
    let needs = await needModel.findAndCountAll(search, limit, offset);

    needs.rows.forEach((need) => {
      delete need.createdAt; // not needed
      delete need.updatedAt; // not needed
    });
    
    const response = getPagingData(needs, page, limit)

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