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

export default function handler(req, res) {
  if (req.method === "POST") {
    postHandler(req, res);
    return;
  }
}
