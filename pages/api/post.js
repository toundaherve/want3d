// received

import { storeImage } from "../../aws/s3";
import { v4 as uuidV4 } from "uuid";
import { savePostToDb } from "../../db/Post";
// redirected

// image url retrieved

// saved To Db

// operation aborted

// client responded to

async function newPostHandler(req, res) {
  const data = req.body;

  let imageKey = data.name + "-" + uuidV4();
  try {
    await storeImage(imageKey, data.image);
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

  const imageURL =
    "https://want3d-images.s3.eu-west-2.amazonaws.com/" + imageKey;
  try {
    const newPost = await savePostToDb({ ...data, image: imageURL });
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify({
        error: false,
        newPostId: newPost.id,
      })
    );
    res.end();
  } catch (error) {
    // TODO: image deleted from s3

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
