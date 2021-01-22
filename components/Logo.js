const LogoText = () => {
  return <span className="fw-bolder">WANT3D</span>;
};

export default function Logo() {
  return (
    <a href="/" className="">
      <span className="d-none d-md-inline-block display-6">
        <LogoText />
      </span>
      <span className="d-md-none h3">
        <LogoText />
      </span>
    </a>
  );
}
