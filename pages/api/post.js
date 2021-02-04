import { savePostToDb } from "../../db/Post";

async function newPostHandler(req, res) {
  const data = req.body;

  try {
    const newPost = await savePostToDb({ ...data });
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify({
        error: false,
        newPostId: newPost.id,
      })
    );
    res.end();
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify({
        error: true,
        error: "Internal server error",
      })
    );
    res.end();
    console.log(error);
    return;
  }
}

export default function handler(req, res) {
  if (req.method === "POST") {
    newPostHandler(req, res);
    return;
  }
}
