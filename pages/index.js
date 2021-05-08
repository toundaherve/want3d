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
          <div className="d-flex hero-height justify-content-center position-relative" >
            <div className="d-flex flex-column hero-text-height justify-content-center">
              <h1 className="display-5 mb-0 text-dark fw-bold text-center hero-heading">
                SAY WHAT YOU WANT
                <br /> MEET YOUR NEED
              </h1>
              <span className="d-block mb-3"></span>
              <div className="p-3" style={{backgroundColor: "#212529cc"}} >
                <form className="d-flex" action="/post">
                  <input className="form-control me-2 w-auto flex-grow-1" type="search" name="itemName" placeholder='i.e "iPhone 12"' required />
                  <button className="btn btn-secondary" type="submit">Create need</button>
                </form>
              </div>
            </div>
            <div className="position-absolute top-0 start-0 end-0 bottom-0 w-100 bg-dark" style={{zIndex: "-2"}}>
                <img src="https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&q=80&w=750" alt="" style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "right"}}/>
            </div>
            <div className="position-absolute top-0 start-0 end-0 bottom-0 w-100" style={{backgroundColor: "rgba(0,0,0,0.5)", zIndex: "-1"}}> </div>
          </div>
      </div>
      <span className="d-block mb-3 "></span>
    </Layout>
  );
}
