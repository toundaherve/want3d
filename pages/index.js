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
        <div className="hero-box position-relative">
          <div className="position-absolute w-100 h-100 top-0 start-0">
            <div className="d-flex hero-height justify-content-center position-relative" >
              <div className="d-flex flex-column hero-text-height justify-content-center bg-transparent" style={{zIndex: "23", padding: "12px 8px"}} >
                <h1 className="display-5 mb-0 text-white fw-bold text-center hero-heading">
                  SAY WHAT YOU WANT
                  <br /> MEET YOUR N££D
                </h1>
                <span className="d-block mb-3"></span>
                <div className="p-3" style={{backgroundColor: "rgba(33, 37, 41, 0.6)"}} >
                  <form className="d-flex flex-column flex-md-row" action="/post">
                    <input className="d-none form-control me-md-2 mb-2 mb-md-0 w-auto flex-grow-1" type="search" name="itemName" placeholder='i.e "iPhone 12"' required />
                    <a className="btn btn-secondary w-100" href="/post">Create need</a>
                  </form>
                </div>
              </div>
              <div className="position-absolute top-0 start-0 end-0 bottom-0 w-100 bg-dark" style={{zIndex: "-2"}}>
                  <img src="https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&q=80&w=750" alt="" style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "right"}}/>
              </div>
              <div className="position-absolute top-0 start-0 end-0 bottom-0 w-100" style={{backgroundColor: "rgba(0,0,0,0.5)", zIndex: "0"}}>
                  <div className="w-100 bg-dark" style={{height: "70%", backgroundImage: "linear-gradient(to right, #0a58ca, #d63384)"}}></div>
                  <div className="w-100 bg-primary" style={{height: "30%"}}>
                    <img className="w-100 h-100" style={{objectFit: "cover", objectPosition: "center"}} src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="d-block mb-3 "></span>
    </Layout>
  );
}
