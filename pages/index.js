import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <span className="d-block mb-3"></span>
      <div className="container">
        <div className="hero-height position-relative">
          <div className="position-absolute top-0 start-0 bottom-0 end-0">
            <div className="w-100 h-100 bg-light hero-bg-image"></div>
          </div>
        </div>
      </div>
      <span className="d-block mb-3"></span>
    </Layout>
  );
}

