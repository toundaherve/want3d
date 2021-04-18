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

  const limit = 10;
  const offset = 0;

  let needs;
  try {
    needs = await needModel.findAll(search, limit, offset);
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
  needs.forEach((need) => {
    delete need.createdAt; // not needed
    delete need.updatedAt; // not needed
  });

  res.writeHead(200);
  res.write(
    JSON.stringify({
      needs,
      search
    })
  );
  res.end()
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
