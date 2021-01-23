import Layout from "../components/Layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { useState } from "react";

export default function Results() {
  return (
    <Layout>
      <div>
        <div className="d-flex justify-content-center">
          <div
            className="position-relative z-index-0 bg-dark"
            style={{ maxHeight: "100px", maxWidth: "320px" }}
          >
            <div style={{ height: "100px", width: "320px" }}></div>
          </div>
        </div>
      </div>
      <span className="d-block mb-3"></span>
      <div className="d-flex justify-content-between flex-nowrap">
        {/* Results Section*/}
        <div className="flex-grow-1 flex-shrink-1">
          <div className="position-relative">
            <div>
              {/* Results Header */}
              <div>
                <div className="d-block flex-wrap">
                  <span className="mb-2 d-block"></span>
                  {/* Breadcrumb */}
                  <div style={{ marginBottom: "-16px" }}>
                    <Breadcrumb>
                      <BreadcrumbItem>
                        <a href="/">Home</a>
                      </BreadcrumbItem>
                      <BreadcrumbItem active>Results</BreadcrumbItem>
                    </Breadcrumb>
                  </div>
                  {/* Title */}
                  <h1>Wanted Iphone 6s</h1>
                  {/* Filters */}
                  <div className="d-flex flex-nowrap w-100">
                    <div className="d-flex flex-nowrap">
                      {[1, 2, 3].map((n, idx) => (
                        <div key={idx} className="d-flex flex-wrap py-2 px-1">
                          <Filter>Filter{n}</Filter>
                        </div>
                      ))}
                    </div>
                  </div>
                  <span className="d-block flex-grow-1 flex-shrink-1 mb-3"></span>
                </div>
              </div>
              <span className="d-block mb-2 flex-grow-1 flex-shrink-1"></span>
              {/* Results Grid */}
              <div
                className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-2"
                style={{ marginTop: "0px" }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n, idx) => (
                  <div key={idx} className="col">
                    <div className="d-flex flex-column justify-content-between card p-2 border">
                      <h6 className="text-center mb-0">WANTED</h6>
                      <div className="w-100" style={{ height: "96px" }}></div>
                      <div className="text-center">
                        <small>Reward</small>
                        <h6 className="text-center mb-0">$750</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* More button */}
              <div className="d-flex justify-content-center py-3">
                <Button color="success">Load more</Button>
              </div>
            </div>
          </div>
        </div>
        {/* Ads Aside*/}
        <div className="d-none flex-grow-0 flex-shrink-0"></div>
      </div>
      <span className="d-block mb-2"></span>
    </Layout>
  );
}

function Filter({ children, options = ["option1", "option2", "option3"] }) {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>{children}</DropdownToggle>
      <DropdownMenu>
        {options.map((option, idx) => (
          <DropdownItem key={idx}>{option}</DropdownItem>
        ))}
      </DropdownMenu>
    </ButtonDropdown>
  );
}
