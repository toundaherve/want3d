import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="position-relative z-index-0">
      <div className="bg-white">
        <FooterDivider />
        <div className="container py-32px">
          <FooterContent />
        </div>
        <FooterDivider />
        <FooterSocialMediaLinks />
      </div>
    </div>
  );
}

const links = {
  wantedLinks: [
    {
      text: "About WANT3D",
      url: "/about",
    },
    {
      text: "Advertising on WANT3D",
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

function FooterDivider() {
  return <span className="d-block border"></span>;
}

function FooterContent() {
  return (
    <div className="row">
      <div className="col-12 col-md-4">
        <FooterNav title="WANT3D" links={links.wantedLinks} />
      </div>
      <div className="col-12 col-md-4">
        <FooterNav title="LEGAL" links={links.legalLinks} />
      </div>
      <div className="col-12 col-md-4">
        <FooterCopyright />
      </div>
    </div>
  );
}

function FooterNav({ title, links = [] }) {
  return (
    <div className="d-flex align-items-center flex-column">
      <h6>{title}</h6>
      <span className="d-block mb-2"></span>
      {links.map((link, idx) => (
        <a key={idx} href={link.url} className="mb-1">
          <small>{link.text}</small>
        </a>
      ))}
      <span className="d-block d-md-none pb-32px"></span>
    </div>
  );
}

function FooterCopyright() {
  return (
    <div className="d-flex align-items-center flex-column">
      <Logo />
      <span className="d-block mb-3"></span>
      <span>
        <small>WANT3D &copy; 2021</small>
      </span>
    </div>
  );
}

function FooterSocialMediaLinks() {
  return (
    <div className="d-flex justify-content-center py-20px">
      <span>F</span>
      <span className="d-block ml-12px mb-3"></span>
      <span>I</span>
      <span className="d-block ml-12px mb-3"></span>
      <span>T</span>
    </div>
  );
}
