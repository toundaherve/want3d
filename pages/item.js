import ItemPage from "../components/ItemPage";

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

export default function Item() {
  return <ItemPage data={item} />;
}
