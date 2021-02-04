import Layout from "./Layout";
import Button from "./Button";
import TopAd from "./TopAd";
import Breadcrumb from "./Breadcrumb";
import { getCurrencySymbol } from "./ItemPage";

let isEmptyResults;
let more;

export default function ResultsPage({ search, data, hasMoreData, filters }) {
  isEmptyResults = data.length > 0 ? false : true;
  more = hasMoreData;
  return (
    <Layout>
      <span className="d-block mb-2"></span>
      <div className="container">
        <TopAd />
        <span className="d-block mb-3"></span>
        <div className="d-flex justify-content-between flex-nowrap">
          <MainContent data={data} search={search} filters={filters} />
          <AsideAd />
        </div>
      </div>
      <span className="d-block mb-3"></span>
    </Layout>
  );
}

function AsideAd() {
  return (
    <div className="d-none d-lg-block results-page-aside-ad-box ms-3">
      {/* // TODO : Stick at ~91px */}
      <div className="results-page-aside-ad-top border">
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

function MainContent({ search, data, filters }) {
  return (
    <div className="flex-grow-1">
      <div className="position-relative">
        <Panel search={search} filters={filters} />
        <span className="d-block mb-3"></span>
        {!isEmptyResults && <Grid data={data} />}
      </div>
    </div>
  );
}

function Panel({ search, filters }) {
  const headingText = isEmptyResults
    ? 'No "' + search + '" needed yet'
    : 'Results for "' + search + '" needed';
  return (
    <div className="card shadow px-3">
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

function Grid({ data }) {
  return (
    <>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2">
        {data.map(
          ({ id, name, location, reward, currency, description }, idx) => (
            <div className="col" key={idx}>
              <a
                href={`/item?id=${id}`}
                className="text-decoration-none text-dark"
              >
                <div className="card shadow">
                  {/* <img src="..." className="card-img-top" alt="..." /> */}
                  <div className="card-header px-2 py-1">
                    <small>Needed</small>
                  </div>
                  <div className="card-body p-2">
                    <h6 className="card-title text-primary p-0 m-0 fw-bold">
                      {name}
                    </h6>
                    <small className="text-secondary">{location}</small>
                    <h6 className="card-title  p-0 m-0 fw-bold">
                      {getCurrencySymbol(currency) + reward}
                    </h6>
                    <span className="d-block mb-3"></span>
                    <p className="card-text p-0 m-0">{description}</p>
                  </div>
                </div>
              </a>
            </div>
          )
        )}
      </div>
      {more && (
        <div className="py-3 d-flex justify-content-center">
          <Button purpose="success shadow">Load more</Button>
        </div>
      )}
    </>
  );
}
