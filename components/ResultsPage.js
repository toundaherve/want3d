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
    <div>
      <span className="d-block mb-2"></span>
      <Breadcrumb />
      <h1 className="mb-0">Results for wanted "iphone"</h1>
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
          className="btn btn-secondary dropdown-toggle"
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
      <div className="row row-cols-1 row-cols-md-2 g-2">
        {[1, 2, 3, 4].map((card, idx) => (
          <div className="col" key={idx}>
            <div className="card">
              {/* <img src="..." className="card-img-top" alt="..." /> */}
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="py-3 d-flex justify-content-center">
        <Button purpose="success">Load more</Button>
      </div>
    </>
  );
}
