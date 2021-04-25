import Reat from "react";

const Breadcrumb = ({current = ""}) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item">
          <a className="text-dark" href="/">
            Home
          </a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {current}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
