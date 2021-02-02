import Logo from "./Logo";
import SearchForm from "./SearchForm";
import Button from "./Button";
import useWindowHasScrolledPastValue from "../hooks/useWindowHasScrolledPastValue";

export default function Header() {
  const addShadow = useWindowHasScrolledPastValue(2);

  return (
    <div
      className={`sticky-top header-top ${
        addShadow ? "shadow" : "shadow-none"
      }`}
    >
      <div className="bg-primary">
        <div className="header-height">
          <div className="container">
            <div className="header-content-wrapping">
              <div className="pt-12px pb-12px">
                <HeaderContent1 />
                <HeaderContent2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderContent1() {
  return (
    <div className="d-md-none">
      <div className="row justify-content-center">
        <div className="col-auto">
          <Logo />
        </div>
        <div className="col-12 mb-12px"></div>

        <div className="col-12">
          <div className="d-flex">
            <div className="">
              <Button
                purpose="link text-white text-decoration-none"
                link="/post"
              >
                POST
              </Button>
            </div>
            <div className="span d-block mb-3 ml-12px"></div>
            <div className="flex-grow-1">
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderContent2() {
  return (
    <div className="d-none d-md-flex align-items-center">
      <Logo />
      <span className="d-inline-block mb-3 ms-3"></span>
      <div className="flex-grow-1">
        <SearchForm />
      </div>
      <span className="d-inline-block mb-3 ml-20px"></span>
      <Button purpose="link text-white text-decoration-none" link="/post">
        POST
      </Button>
    </div>
  );
}

// header background changed

// header text color changed

// button background-color changed
