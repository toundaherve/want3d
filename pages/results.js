import ResultsPage from "../components/ResultsPage";
import { searchPostsInDb } from "../db/Post";

const filters = [
  {
    type: "Sort by",
    options: ["Budget", "Location", "Date posted"],
  },
];

export default function Results({ data, search, hasMoreData = false }) {
  return (
    <ResultsPage
      search={search}
      data={data}
      filters={filters}
      hasMoreData={hasMoreData}
    />
  );
}

export async function getServerSideProps(context) {
  const text = context.query.search;
  console.log(text);
  if (!text) {
    context.res.writeHead(400, { "Context-Type": "text/plain" });
    context.res.end("Missing search text");
    return {
      props: null,
    };
  }

  const limit = context.query.limit ? context.query.limit : 10;
  const offset = context.query.offset ? context.query.offset : 0;

  let results;
  try {
    results = await searchPostsInDb(text, limit, offset);
  } catch (error) {
    context.res.writeHead(500, { "Context-Type": "text/plain" });
    context.res.end("Internal server error");
    return {
      props: null,
    };
  }

  results.forEach((post) => {
    delete post.createdAt; // not needed
    delete post.updatedAt; // not needed
  });

  return {
    props: {
      data: results,
      search: text,
    },
  };
}

