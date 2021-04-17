import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import { Helmet } from "react-helmet";
import Button from "../components/Button";

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="uft-8" />
        <title>BONVIH | Where Dreams Come True</title>
        <meta
          name="description"
          content="BONVIH is a platform where user can advertise what item they need to potential sellers."
        />
        <link rel="canonical" href="https://www.bonvih.com" />
      </Helmet>
      <span className="d-block mb-3"></span>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="d-flex hero-height justify-content-center">
              <div className="d-flex flex-column hero-text-height justify-content-center">
                <h1 className="display-5 mb-0 text-dark fw-bold text-center hero-heading">
                  WANNA SELL
                  <br /> FIND WHO NEEDS IT
                </h1>
                <span className="d-block mb-3"></span>
                <SearchBar fullWidth />
              </div>
            </div>
          </div>
          <div className="d-none d-md-block col-12 col-md-6">
            <div className="hero-height">
              <img
                src="https://cdn.dribbble.com/users/1355613/screenshots/6533809/invoice_maker.jpg"
                alt="person-on-computer"
                className="hero-image"
              />
              {/* <div className="position-absolute top-0 start-0 bottom-0 end-0 hero-overlay" /> */}
            </div>
          </div>
        </div>
      </div>
      <span className="d-block mb-3 "></span>
    </Layout>
  );
}
