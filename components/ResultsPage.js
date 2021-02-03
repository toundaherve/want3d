import Layout from "./Layout";
import Button from "./Button";
import TopAd from "./TopAd";
import Breadcrumb from "./Breadcrumb";

export default function ResultsPage() {
  return (
    <Layout>
      <span className="d-block mb-2"></span>
      <div className="container">
        <TopAd />
        <span className="d-block mb-3"></span>
        <div className="d-flex justify-content-between flex-nowrap">
          <MainContent />
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

function MainContent() {
  return (
    <div className="flex-grow-1">
      <div className="position-relative">
        <Panel />
        <span className="d-block mb-3"></span>
        <Grid />
      </div>
    </div>
  );
}

function Panel() {
  return (
    <div className="card shadow px-3">
      <span className="d-block mb-2"></span>
      {/* <Breadcrumb /> */}
      <h1 className="mb-0">Results for i need "iphone"</h1>
      <span className="d-block mb-12px"></span>
      <div className="d-flex flex-nowrap">
        {[1, 2].map((filter, idx) => (
          <div key={idx}>
            <Filter />
          </div>
        ))}
      </div>
      <span className="d-block pb-3"></span>
    </div>
  );
}

function Filter() {
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
          Filter
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {[1, 2, 3].map((option, idx) => (
            <li key={idx}>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Grid() {
  return (
    <>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2">
        {[1, 2, 3, 4, 5, 6].map((card, idx) => (
          <div className="col" key={idx}>
            <a href="/item" className="text-decoration-none text-dark">
              <div className="card shadow">
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-header px-2 py-1">
                  <small>Needed</small>
                </div>
                <div className="card-body p-2">
                  <h6 className="card-title text-primary p-0 m-0 fw-bold">
                    Iphone 6 plus
                  </h6>
                  <small className="text-secondary">Leeds</small>
                  <h6 className="card-title  p-0 m-0 fw-bold">$750</h6>
                  <span className="d-block mb-3"></span>
                  <p className="card-text p-0 m-0">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content.
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="py-3 d-flex justify-content-center">
        <Button purpose="success shadow">Load more</Button>
      </div>
    </>
  );
}

// card- borders and items distanced

// card heading boldened

//
