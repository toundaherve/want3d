import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { Button } from "reactstrap";
import Logo from "./Logo";
import SearchForm from "./SearchForm";

export default function Header() {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 2) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    });
  });

  return (
    <div className="sticky-top w-100 sticky-header">
      <div
        className={`bg-white ${
          shadow ? "shadow" : "shadow-none"
        } header-content`}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div>
                <div
                  className="d-flex flex-wrap"
                  style={{ padding: "12px 0px" }}
                >
                  <div className="d-none d-md-block w-100">
                    <div className="d-flex align-items-center flex-nowrap">
                      <div className="d-flex justify-content-start align-items-center flex-nowrap flex-grow-1">
                        <Logo />
                        <span className="d-inline-block flex-grow-0 flex-shrink-1 mb-3 me-3"></span>
                        <div className="w-100 flex-wrap">
                          <SearchForm />
                        </div>
                      </div>
                      <div className="d-flex justify-content-end flex-nowrap">
                        <span className="d-inline-block flex-grow-0 flex-shrink-1 ms-4 mb-3"></span>
                        <Button color="primary">LOG IN</Button>
                      </div>
                    </div>
                  </div>
                  <div className="d-md-none w-100">
                    <div className="d-flex align-items-center justify-content-center flex-wrap">
                      <Logo />
                    </div>
                    <span
                      className="d-block"
                      style={{ marginBottom: "12px" }}
                    ></span>
                    <div className="d-flex justify-content-between align-items-center flex-nowrap">
                      <MdMenu size={38} />
                      <span
                        className="inline-block flex-grow-0 flex-shrink-1 mb-3"
                        style={{ marginLeft: "12px" }}
                      ></span>
                      <div className="flex-grow-1">
                        <SearchForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
