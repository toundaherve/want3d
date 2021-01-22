import Header from "../components/Header";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <div>
      <div className="min-vh-100">
        <Header />
        <span className="d-block mb-3"></span>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="hero">
                <div className="hero-wrapper bg-secondary bg-gradient flex-wrap text-center position-relative"></div>
              </div>
            </div>
          </div>
        </div>
        <span className="d-block mb-3"></span>
      </div>
      <div className="position-relative">
        <div className="bg-white flex-wrap">
          <span className="d-block border-bottom border-1 border-secondary"></span>
          <div className="container" style={{ padding: "32px 0" }}>
            <div className="row g-4">
              <div className="col-12 col-md-6 ">
                <div className="d-flex flex-column align-items-center">
                  <h6>LEGAL</h6>
                  <a href="/">
                    <small>Contact</small>
                  </a>
                  <span className="d-block mb-1"></span>
                  <a href="/">
                    <small>Terms & Conditions</small>
                  </a>
                  <span className="d-block mb-1"></span>
                  <a href="/">
                    <small>User protection</small>
                  </a>
                  <span className="d-block mb-1"></span>
                  <a href="/">
                    <small>Privacy Policy</small>
                  </a>
                  <span className="d-block mb-1"></span>
                  <a href="/">
                    <small>Cookie Policy</small>
                  </a>
                  <span className="d-block mb-1"></span>
                  <a href="/">
                    <small>Privacy Settings</small>
                  </a>
                  <span className="d-block mb-1"></span>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="d-flex flex-column align-items-center">
                  <Logo />
                  <span className="d-block mb-3"></span>
                  <small>Copyright 2021</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
