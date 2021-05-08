import Logo from "./Logo";
import { FaInstagram, FaFacebookF } from "react-icons/fa"

export default function Footer() {
  const links = getLinksData();

  return (
    <div className="position-relative z-index-0">
      <div className="text-white bg-dark" style={{backgroundColor: "#031633"}}>
        <div className="container py-32px">
          <div className="row">
            <div className="col-12 col-md-4">
              <FooterNav title="BONVIH" links={links.wantedLinks} />
            </div>
            <div className="col-12 col-md-4">
              <FooterNav title="LEGAL" links={links.legalLinks} />
            </div>
            <div className="col-12 col-md-4">
              <Coyright />
            </div>
          </div>
        </div>
        <Divider />
        <div className="d-flex justify-content-center py-20px">
          <a href="/" className="text-white text-decoration-none">
            <FaInstagram size={24} />
          </a>
          <span className="d-block ml-12px mb-3"></span>
          <a href="/" className="text-white text-decoration-none">
            <FaFacebookF size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return <span className="d-block border-bottom" style={{borderColor: "#6c757d !important"}}></span>;
}

function FooterNav({ title, links = [] }) {
  return (
    <div className="d-flex align-items-center flex-column">
      <h6 className="mb-0">{title}</h6>
      <span className="d-block mb-2"></span>
      {links.map((link, idx) => (
        <a
          key={idx}
          href={link.url}
          className="mb-1 text-light text-decoration-none"
        >
          <small>{link.text}</small>
        </a>
      ))}
      <span className="d-block d-md-none pb-32px"></span>
    </div>
  );
}

function Coyright() {
  return (
    <div className="d-flex align-items-center flex-column">
      <Logo />
      <span className="d-block mb-3"></span>
      <span>
        <small className="text-light">BONVIH &copy; 2021</small>
      </span>
    </div>
  );
}

function getLinksData() {
  return {
    wantedLinks: [
      {
        text: "About BONVIH",
        url: "/about",
      },
      {
        text: "Advertising on BONVIH",
        url: "/advertising",
      },
      {
        text: "News",
        url: "/news",
      },
    ],

    legalLinks: [
      {
        text: "Contact",
        url: "/contact",
      },
      {
        text: "Terms & Conditions",
        url: "/terms",
      },
      {
        text: "Buyer protection",
        url: "/buyer-protection",
      },
      {
        text: "Privacy Policy",
        url: "/privacy-policy",
      },
      {
        text: "Cookie Policy",
        url: "/cookie-policy",
      },
      {
        text: "Privacy settings",
        url: "/privacy-settings",
      },
    ],
  };
}
