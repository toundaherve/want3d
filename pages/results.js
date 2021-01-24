import ResultsPage from "../components/ResultsPage";

const searchText = "Iphone 6 plus";
const data = [
  {
    name: "Iphone 6 plus",
    reward: "750",
    currency: "GBP",
    description: "256GB, black color, no scraches please.",
    category: "phones",
    location: "Leeds",
    email: "toundaherve@gmail.com",
  },
  {
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

export default function Results() {
  return <ResultsPage searchText={searchText} data={data} filters={filters} />;
}
