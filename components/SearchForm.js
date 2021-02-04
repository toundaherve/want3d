import Button from "./Button";

export default function SearchForm() {
  return (
    <form className="d-flex" action="/results">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Enter item name"
        aria-label="Search"
        name="search"
        required
      />
      <Button type="submit" purpose="success">
        Search
      </Button>
    </form>
  );
}
