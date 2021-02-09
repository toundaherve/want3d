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
          <div className="d-flex justify-content-center">
            
            <div className="">
              <Button
                purpose="link btn-success text-white text-decoration-none"
                link="/post"
              >
                CREATE&nbsp;A&nbsp;NEED
              </Button>
            </div>
            {!isHomePage() && (
              <>
                <div className="span d-block mb-3"></div>
                <div className="flex-grow-1 ml-12px">
                  <SearchForm />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderContent2() {
  return (
    <div className="d-none d-md-flex align-items-center justify-content-between">
      <Logo />
      <span className="d-inline-block mb-3 ms-3"></span>
      {!isHomePage() && (
        <>
          <div className="flex-grow-1">
            <SearchForm />
          </div>
          <span className="d-inline-block mb-3 ml-20px"></span>
        </>
      )}
      <Button
        purpose="link btn-success text-white text-decoration-none"
        link="/post"
      >
        SAY IT NOW
      </Button>
    </div>
  );
}

function isHomePage() {
  // if (global.location) {
  //   return location.pathname === "/";
  // }

  return false
}
