import ItemPage from "../components/ItemPage";
import { getPostFromDb } from "../db/Post";

const item = {
  id: "211341",
  name: "Iphone 6 plus",
  reward: "750",
  currency: "GBP",
  description: "256GB, black color, no scraches please.",
  category: "phones",
  location: "Leeds",
  email: "toundaherve@gmail.com",
};

export default function Item({ data }) {
  return <ItemPage data={data} />;
}

export async function getServerSideProps(context) {
  const id = context.query.id;

  if (!id) {
    context.res.writeHead(400, { "Context-Type": "text/plain" });
    context.res.end("Missing Id");
    return;
  }

  let post;
  try {
    post = await getPostFromDb(id);
    if (post === null) {
      context.res.writeHead(400, { "Context-Type": "text/plain" });
      context.res.end("Post not found");
      return;
    }
  } catch (error) {
    context.res.writeHead(500, { "Context-Type": "text/plain" });
    context.res.end("Internal server error");
    return;
  }

  return {
    props: {
      data: {
        ...post,
        image: post.image.toString("utf8"),
        createdAt: post.createdAt.toString(),
        updatedAt: post.updatedAt.toString(),
      },
    },
  };
}
