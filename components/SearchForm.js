import Button from "./Button";

export default function SearchForm() {
  return (
    <form className="d-flex" action="/results">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        name="search"
      />
      <Button type="submit">Search</Button>
    </form>
  );
}
