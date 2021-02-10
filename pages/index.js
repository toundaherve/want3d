import Layout from "../components/Layout";
import SearchForm from "../components/SearchForm";
import {Helmet} from "react-helmet"
import Button from "../components/Button";

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="uft-8"/>
        <title>iNeed | Where Dreams Come True</title>
        <meta name="description" content="iNeed is a platform where user can advertise what item they need to potential sellers."/>
        <link rel="canonical" href="https://www.ineed.com"/>
      </Helmet>
      <span className="d-block mb-3"></span>
      <div className="container">
        <div className="hero-height position-relative">
          <div className="position-absolute top-0 start-0 bottom-0 end-0 hero-gb-image-container">
            <div className="w-100 h-100 bg-white bg-gradient hero-bg-image"></div>
            {/* <div className="position-absolute top-0 start-0 bottom-0 end-0 hero-overlay"></div> */}
          </div>
          <HeroText />
        </div>
      </div>
      <span className="d-block mb-3"></span>
    </Layout>
  );
}

function HeroText() {
  return (
    <div className="d-flex w-100 h-100 justify-content-center">
      <div className="d-flex flex-column hero-text-height justify-content-center">
        <h1 className="display-5 mb-0 text-dark fw-bold text-center hero-heading">
          NEED SOMETHING,<br /> SAY SOMETHING
        </h1>
        {/* <span className="d-block mb-3"></span>
        <Button link="/post" purpose="primary text-white">SAY IT NOW</Button> */}
      </div>
    </div>
  );
}

