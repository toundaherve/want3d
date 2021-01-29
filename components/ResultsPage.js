import Layout from "./Layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import Link from "next/link";
import { useState } from "react";

export default function ResultsPage({
  search = "",
  data = [],
  hasMoreData = false,
  filters = [],
}) {
  return (
    <Layout>
      <span className="d-block mb-3 w-100 text-white"></span>
      <div className="d-none">
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
                  {
                    <h1>
                      {data.length > 0
                        ? `Wanted "${search}"`
                        : `No wanted "${search}" yet`}
                    </h1>
                  }
                  {/* Filters */}
                  {data.length > 0 && (
                    <>
                      <div className="d-flex flex-nowrap w-100">
                        <div className="d-flex flex-nowrap">
                          {filters.map((filter, idx) => (
                            <div
                              key={idx}
                              className="d-flex flex-wrap py-2 px-1"
                            >
                              <Filter options={filter[1]}>
                                {filter[0][0]}
                              </Filter>
                            </div>
                          ))}
                        </div>
                      </div>
                      <span className="d-block flex-grow-1 flex-shrink-1 mb-3"></span>
                    </>
                  )}
                </div>
              </div>
              <span className="d-block mb-2 flex-grow-1 flex-shrink-1"></span>
              {/* Results Grid */}
              <div
                className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-2"
                style={{ marginTop: "0px" }}
              >
                {data.map((item, idx) => (
                  <div key={idx} className="col">
                    <a href={`/item?id=${item.id}`} className="link-dark">
                      <div
                        className="position-relative w-100"
                        style={{ paddingTop: "171.36%" }}
                      >
                        <div className="position-absolute top-0 start-0 end-0 bottom-0">
                          <div className="d-flex flex-column justify-content-between card p-2 border h-100">
                            <h6 className="text-center mb-2 flex-grow-0">
                              WANTED
                            </h6>
                            <div className="w-100 flex-grow-1 bg-light">
                              <img
                                className="img-fluid"
                                src={item.image}
                                alt={item.name}
                              />
                            </div>
                            <div className="text-center flex-grow-0">
                              <small>Reward</small>
                              <h6 className="text-center mb-0">{`${currencySymbol(
                                item.currency
                              )} ${item.reward}`}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
              {/* More button */}
              {hasMoreData && (
                <div className="d-flex justify-content-center py-3">
                  <Button color="success">Load more</Button>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Ads Aside*/}
        <div className="d-none flex-grow-0 flex-shrink-0"></div>
      </div>
      <span className="d-block mb-5"></span>
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
          <DropdownItem
            key={idx}
            onClick={(e) => alert(e.currentTarget.innerText)}
          >
            {option}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export function currencySymbol(currency) {
  const symbols = {
    EUR: "€",
    USD: "$",
    GBP: "£",
  };

  return symbols[currency];
}
