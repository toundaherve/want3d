import ItemPage from "../components/ItemPage";
import { getPostFromDb } from "../db/Post";

export default function Item({ data }) {
  return <ItemPage data={data} />;
}

export async function getServerSideProps(context) {
  const id = context.query.id;

  if (!id) {
    context.res.writeHead(400, { "Context-Type": "text/plain" });
    context.res.end("Missing Id");
    return {
      props: null,
    };
  }

  let post;
  try {
    post = await getPostFromDb(id);
    if (post === null) {
      context.res.writeHead(400, { "Context-Type": "text/plain" });
      context.res.end("Post not found");
      return {
        props: null,
      };
    }
  } catch (error) {
    context.res.writeHead(500, { "Context-Type": "text/plain" });
    context.res.end("Internal server error");
    return {
      props: null,
    };
  }

  return {
    props: {
      data: {
        ...post,
        createdAt: post.createdAt.toString(),
        updatedAt: post.updatedAt.toString(),
      },
    },
  };
}
