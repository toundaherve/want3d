import Button from "./Button";
import { BsSearch } from "react-icons/bs";

export default function SearchForm() {
  return (
    <form className="d-flex" action="/results">
      <div className="d-flex w-100 ">
        <input
          className="form-control search-input"
          type="search"
          placeholder="Search what people need..."
          aria-label="Search"
          name="search"
          required
        />
        <div className="d-flex align-items-center border border-start-0 rounded-top rounded-end rounded-bottom search-icon">
          <button type="submit" className="px-2">
            <BsSearch size={18} />
          </button>
        </div>
      </div>
    </form>
  );
}
