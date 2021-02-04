import Layout from "../components/Layout";
import SearchForm from "../components/SearchForm";

export default function Home() {
  return (
    <Layout>
      <span className="d-block mb-3"></span>
      <div className="container">
        <div className="hero-height position-relative">
          <div className="position-absolute top-0 start-0 bottom-0 end-0 hero-gb-image-container">
            <div className="w-100 h-100 bg-light hero-bg-image"></div>
            <div className="position-absolute top-0 start-0 bottom-0 end-0 hero-overlay"></div>
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
        <h1 className="display-5 mb-0 text-white fw-bold text-center hero-heading">
          WANNA SELL? <br /> FIND WHO NEEDS IT
        </h1>
        <span className="d-block mb-3"></span>
        <SearchForm />
      </div>
    </div>
  );
}
