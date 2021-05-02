import React from "react";
import useSWR from "swr";
import { Helmet } from "react-helmet";
// import { GiMoneyStack } from "react-icons/gi";
// import { MdLocationOn, MdMessage } from "react-icons/md";
// import needModel from "../db/Need";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Breadcrumb from "../components/Breadcrumb";
import getCurrencySymbol from "../utils/getCurrencySymbol";
import Loading from "../components/Loading";

const filters = [
  {
    type: "Sort by",
    options: ["Budget", "Location", "Date posted"],
  },
];

export default function Search() {
  const {data, error} = useSWR("/api/need?search=", url => {
    const query = location.search.split("=")[1]
    return fetch(`${url}${query}`).then(r => r.json())
  })
  
  if (error) return <div>Failed to load</div>
  if (!data) return <Loading />

  const {needs, search} = data
  let resultsFound = needs.length > 0;
  let resultsFoundText = 'People who need "' + search + '"';
  let noResultsFoundText = 'Nobody needs "' + search + '" yet';
  let headingText = resultsFound ? resultsFoundText : noResultsFoundText;
  let moreResults = false

  return (
    <Layout>
      <Helmet>
        <title>Search - BONVIH</title>
        <meta name="description" content="Search what people need ..." />
        <link rel="canonical" href="https://www.bonvih.com/search" />
      </Helmet>
      <span className="d-block mb-2"></span>
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="position-relative">
            <div className="results-page-top-ad-box">
              <div className="results-page-top-ad-iframe-box d-inline-block bg-light border">
                {/* iframe goes here */}
              </div>
            </div>
          </div>
        </div>
        <span className="d-block mb-3"></span>
        <div className="d-flex justify-content-between flex-nowrap">
          <div className="flex-grow-1">
            <div className="position-relative">
              <div>
                <span className="d-block mb-2"></span>
                <Breadcrumb current="Results" />
                <h1 className="mb-0">{headingText}</h1>
                <span className="d-block mb-12px"></span>
                {resultsFound && (
                  <div className="d-flex flex-nowrap">
                    {filters.map((filter, idx) => (
                      <div key={idx}>
                        <FilterView {...filter} />
                      </div>
                    ))}
                  </div>
                )}
                <span className="d-block pb-3"></span>
              </div>
              <span className="d-block mb-3"></span>
              {resultsFound && (
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2">
                  {needs.map((item, idx) => (
                    <div className="col" key={idx}>
                      <a
                        href={`/need?id=${item.id}`}
                        className="text-decoration-none text-dark"
                      >
                        <NeedView {...item} />
                      </a>
                    </div>
                  ))}
                </div>
              )}
              {moreResults && (
                <div className="py-3 d-flex justify-content-center">
                  <Button purpose="success shadow">Load more</Button>
                </div>
              )}
            </div>
          </div>
          {/* <div className="d-none d-lg-block  ms-3">
                <div className="results-page-aside-ad-box">
                <div className="results-page-aside-ad-top border">
                  <div className="d-flex justify-content-start">
                    <div className="position-relative">
                      <div className="results-page-aside-ad-iframe-box bg-light">
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div> */}
        </div>
      </div>
      <span className="d-block mb-3"></span>
    </Layout>
  ) 
}

function FilterView({ type, options }) {
  return (
    <div className="py-2 px-1">
      <div className="dropdown">
        <button
          className="btn btn-light bg-white border border-1 dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {type}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {options.map((option, idx) => (
            <li key={idx}>
              <a className="dropdown-item" href="#">
                {option}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function NeedView({ itemName,itemDescription, buyerCurrency, buyerBudget, buyerCountry, buyerCity }) {
  return (
    <div className="card shadow">
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="d-none card-header px-2 py-1 bg-secondary text-dark">
        {/* <small>Needed</small> */}
      </div>
      <div className="card-body p-2">
        <div className="h6 card-title p-0 m-0 fw-bold">
          {/* <span>I need</span>{" "} */}
          <span className="text-primary fw-bold">{itemName}</span>
        </div>
        <small className="text-dark">
          {buyerCity} - {buyerCountry}
        </small>
        <div className="h6 card-title  p-0 m-0 fw-bold">
           {getCurrencySymbol(buyerCurrency) + buyerBudget}
        </div>
        <span className="d-block mb-3"></span>
        <p className="card-text p-0 m-0">
           {itemDescription}
        </p>
      </div>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const search = context.query.search;
//   if (!search) {
//     context.res.writeHead(400, { "Context-Type": "text/plain" });
//     context.res.end("Missing search text");
//     return {
//       props: null,
//     };
//   }

//   const limit = context.query.limit ? context.query.limit : 10;
//   const offset = context.query.offset ? context.query.offset : 0;

//   let needs;
//   try {
//     needs = await needModel.findAll(search, limit, offset);
//   } catch (error) {
//     context.res.writeHead(500, { "Context-Type": "text/plain" });
//     context.res.end("Internal server error");
//     return {
//       props: null,
//     };
//   }

//   needs.forEach((need) => {
//     delete need.createdAt; // not needed
//     delete need.updatedAt; // not needed
//   });

//   return {
//     props: {
//       needs,
//       search,
//     },
//   };
// }
