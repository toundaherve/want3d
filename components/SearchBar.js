import { BsSearch } from "react-icons/bs";

export default function SearchBar({ fullWidth = false }) {
  const maxWidth = fullWidth ? "100%" : "400px";
  return (
    <form className="d-flex" action="/search">
      <div className="d-flex w-100 position-relative" style={{ maxWidth }}>
        <input
          className="form-control"
          type="search"
          placeholder="Search what people need..."
          aria-label="Search"
          name="search"
          required
        />
        <div className="position-absolute top-0 end-0 bottom-0">
          <div className="d-flex flex-column justify-content-center h-100 ">
            <span className="search-icon-container border-end rounded-end">
              <button type="submit" className="px-2 ">
                <BsSearch size={18} />
              </button>
            </span>
          </div>
        </div>
      </div>
    </form>
  );
}
