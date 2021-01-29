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
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
}
