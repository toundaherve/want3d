import Layout from "./Layout";
import Button from "./Button";
import TopAd from "./TopAd";
import Breadcrumb from "./Breadcrumb";
import { getCurrencySymbol } from "./ItemPage";
import { Helmet } from "react-helmet";

let isEmptyResults;
let more;

export default function ResultsPage({ search, data, hasMoreData, filters }) {
  isEmptyResults = data.length > 0 ? false : true;
  more = hasMoreData;
  return (
    <Layout>
      <Helmet>
        <title>Search - iNeed</title>
        <meta name="description" content="Search what people need ..." />
        <link rel="canonical" href="https://www.ineed.com/search" />
      </Helmet>
      <span className="d-block mb-2"></span>
      <div className="container">
        {/* <TopAd />
        <span className="d-block mb-3"></span> */}
        <div className="d-flex justify-content-between flex-nowrap">
          <div className="flex-grow-1">
            <div className="position-relative">
              <Panel search={search} filters={filters} />
              <span className="d-block mb-3"></span>
              {!isEmptyResults && (
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2">
                  {data.map((item, idx) => (
                    <div className="col" key={idx}>
                      <a
                        href={`/item?id=${item.id}`}
                        className="text-decoration-none text-dark"
                      >
                        <Card2 {...item} />
                      </a>
                    </div>
                  ))}
                </div>
              )}
              {more && (
                <div className="py-3 d-flex justify-content-center">
                  <Button purpose="success shadow">Load more</Button>
                </div>
              )}
            </div>
          </div>
          {/* <div className="d-none d-lg-block  ms-3">
            <AsideAd />
          </div> */}
        </div>
      </div>
      <span className="d-block mb-3"></span>
    </Layout>
  );
}

function Panel({ search, filters }) {
  const headingText = isEmptyResults
    ? 'Nobody needs "' + search + '" yet'
    : 'People who need "' + search + '"';
  return (
    <div>
      <span className="d-block mb-2"></span>
      {/* <Breadcrumb /> */}
      <h1 className="mb-0">{headingText}</h1>
      <span className="d-block mb-12px"></span>
      {!isEmptyResults && (
        <div className="d-flex flex-nowrap">
          {filters.map((filter, idx) => (
            <div key={idx}>
              <Filter {...filter} />
            </div>
          ))}
        </div>
      )}
      <span className="d-block pb-3"></span>
    </div>
  );
}

function Filter({ type, options }) {
  return (
    <div className="py-2 px-1">
      <div className="dropdown">
        <button
          className="btn btn-outline-secondary dropdown-toggle"
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

function Card({ name, location, currency, reward, description }) {
  return (
    <div className="card card-hover">
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      {/* <div className="card-header px-2 py-1">
                    <small>Needed</small>
                  </div> */}
      <div className="card-body p-2">
        <div className="h6 card-title p-0 m-0 fw-bold">
          <span>I need</span>{" "}
          <span className="text-primary fw-bold">{name}</span>
        </div>
        <small className="text-secondary">{location}</small>
        <div className="h6 card-title  p-0 m-0 fw-bold">
          {getCurrencySymbol(currency) + reward}
        </div>
        <span className="d-block mb-3"></span>
        <p className="card-text p-0 m-0">{description}</p>
      </div>
    </div>
  );
}

function AsideAd() {
  return (
    <div className="results-page-aside-ad-box">
      <div className="results-page-aside-ad-top border">
        {/* // TODO : Stick at ~91px */}
        <div className="d-flex justify-content-start">
          <div className="position-relative">
            <div className="results-page-aside-ad-iframe-box bg-light">
              {/* iframe goes here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="card m-0 bg-light">
      {/* <div className="card-header bg-warning p-2 m-0">Iphone10X</div> */}
      <div className="card-body bg-light p-2 m-0">
        <h6 className="p-0 m-0 pb-3 ">
          <u>I need Iphone X10</u>
        </h6>
        <span className="d-block mb-3" />
        <p className="p-0 m-0">Lorem: ipsum dolor sit amet.</p>
        <span className="d-block mb-3" />
        <p className="p-0 m-0">Lorem: ipsum dolor sit amet.</p>
        <span className="d-block mb-3" />
        <p className="p-0 m-0">Lorem: ipsum dolor sit amet.</p>
        <span className="d-block mb-3" />
        <ul className="list-unstyled d-flex flex-wrap m-0 p-0">
          <li className="m-0 p-0 me-1">#iphoneX10</li>
          <li className="m-0 p-0 me-1">#iphoneX10</li>
          <li className="m-0 p-0 me-1">#iphoneX10</li>
          <li className="m-0 p-0 me-1">#iphoneX10</li>
        </ul>
      </div>
      {/* <div className="card-footer bg-white p-2 m-0">></div> */}
    </div>
  );
}

// card header padded | bg colored

// card body padded

// card body-items spaced

// card tags flexed | margined left

// card footer padded
