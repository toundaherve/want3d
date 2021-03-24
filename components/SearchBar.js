import Button from "./Button";
import { BsSearch } from "react-icons/bs";

export default function SearchBar() {
  return (
    <form className="d-flex" action="/search">
      <div className="d-flex w-100 search-container position-relative">
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
