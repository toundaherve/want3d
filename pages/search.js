import React, {useState} from "react";
import useSWR from "swr";
import {useRouter} from "next/router"
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Breadcrumb from "../components/Breadcrumb";
import getCurrencySymbol from "../utils/getCurrencySymbol";
import Loading from "../components/Loading";

const SORT_BY_BUDGET_LOW_TO_HIGH = "SORT_BY_BUDGET_LOW_TO_HIGH"
const SORT_BY_BUDGET_HIGH_TO_LOW = "SORT_BY_BUDGET_HIGH_TO_LOW"
const SORT_BY_NEWEST_FIRST = "SORT_BY_NEWEST_FIRST"
const SORT_BY_OLDEST_FIRST = "SORT_BY_OLDEST_FIRST"

export default function Search() {
  const {query : { search }} = useRouter()
  const [initialLoad, setInitialLoad] = useState(true)
  const [needs, setNeeds] = useState([])
  const [pageIndex, setPageIndex] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [searchParams, setSearchParams] = useState({ sortBy : "createdAt", sortOrder : "DESC"})
  const [sortedBy, setSortedBy] = useState("")

  const { error} = useSWR("/api/need" + queryString() , url => {
    const itemName = location.search.split("=")[1]
    return fetch(`${url}&search=${itemName}`).then(r => r.json()).then(data => {
      const {totalNeeds, needs : moreNeeds, totalPages, currentPage} = data
      setNeeds([...needs].concat(moreNeeds))
      if(initialLoad) setInitialLoad(false);
      setHasMore(totalNeeds > (needs.length + moreNeeds.length))
      if(!initialLoad) setLoadingMore(false)
    })
  })
  
  if (error) return <div>Failed to load</div>
  if (initialLoad) return <Loading />

  let hasData = needs.length > 0;

  function handleLoadMore() {
    if(!initialLoad) setLoadingMore(true)
    setPageIndex(pageIndex + 1)
  }

  function queryString() {
    const perPage = 10
    const {sortBy, sortOrder} = searchParams
    return `?page=${pageIndex}&per_page=${perPage}&sort_by=${sortBy}&sort_order=${sortOrder}`
  }

  function handleSortBy(sortType) {
    if(sortedBy === sortType) {
      return
    }
    setInitialLoad(true)
    setNeeds([])
    setPageIndex(1)
    switch (sortType) {
      case SORT_BY_BUDGET_HIGH_TO_LOW:
        sortBudgetHighToLow()
        break;
      
      case SORT_BY_BUDGET_LOW_TO_HIGH:
        sortBudgetLowToHigh()
        break;
    
      default:
        break;
    }
    setSortedBy(sortType)
  }

  function sortBudgetHighToLow() {
    setSearchParams({
      ...searchParams,
      sortBy: "buyerBudget",
      sortOrder: "DESC",
    })
  }

  function sortBudgetLowToHigh() {
    setSearchParams({
      ...searchParams,
      sortBy: "buyerBudget",
      sortOrder: "ASC",
    })
  }

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
                <h1 className="mb-0">
                  {hasData ? `People who need "${search}"` : `Nobody needs "${search}" yet`}
                </h1>
                <span className="d-block mb-12px"></span>
                {hasData && (
                  <div className="d-flex flex-nowrap">
                    <SortByFilter onSortBy={handleSortBy} />
                  </div>
                )}
                <span className="d-block pb-3"></span>
              </div>
              <span className="d-block mb-3"></span>
              {hasData && (
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
              <div className="py-3 d-flex justify-content-center">
                <Button disabled={!hasMore} loading={loadingMore} purpose="success shadow" onClick={handleLoadMore}>
                  {hasMore ? "Load more" : "No more results"}
                </Button>
              </div>
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

function SortByFilter({onSortBy}) {

  const handleClick = sortType => e => {
    e.stopPropagation()
    onSortBy(sortType)
  }

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
          Sort by
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li onClick={handleClick(SORT_BY_BUDGET_HIGH_TO_LOW)}>
              <a className="dropdown-item" href="#">
                Budget high to low
              </a>
            </li>
            <li onClick={handleClick(SORT_BY_BUDGET_LOW_TO_HIGH)}>
              <a className="dropdown-item" href="#">
                Budget low to high
              </a>
            </li>
        </ul>
      </div>
    </div>
  );
}

function NeedView({ itemName,itemDescription, buyerCurrency, buyerBudget, buyerCountry, buyerCity, createdAt }) {
  return (
    <div className="card shadow">
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="d-block card-header px-2 py-1 bg-light text-dark">
        <small>{createdAt}</small>
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
