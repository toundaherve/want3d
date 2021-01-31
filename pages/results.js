import ResultsPage from "../components/ResultsPage";
import { searchPostsInDb } from "../db/Post";

// mockData
const searchText = "Iphone 6 plus";
const data = [
  {
    id: "211341",
    name: "Iphone 6 plus",
    reward: "750",
    currency: "GBP",
    description: "256GB, black color, no scraches please.",
    category: "phones",
    location: "Leeds",
    email: "toundaherve@gmail.com",
  },
  {
    id: "48274824",
    name: "Iphone 6 plus",
    reward: "650",
    currency: "GBP",
    description: "512GB, red color, no scraches please.",
    category: "phones",
    location: "London",
    email: "sarah@gmail.com",
  },
];
const filters = [
  [["Sort by"], ["Upload date", "Reward", "Location"]],
  [["Category"], ["Automobiles", "Phones", "Clothing"]],
];

export default function Results({ data, search }) {
  return <ResultsPage search={search} data={data} filters={filters} />;
}

export async function getServerSideProps(context) {
  const text = context.query.search;

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
    post.image = post.image.toString("utf8"); // image is of type buffer
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
