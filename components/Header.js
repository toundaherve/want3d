import Logo from "./Logo";
import SearchForm from "./SearchForm";
import Button from "./Button";
import useWindowHasScrolledPastValue from "../hooks/useWindowHasScrolledPastValue";
import { useEffect, useState } from "react";

// export default function Header() {
//   const [shadow, setShadow] = useState(false);

//   function handleShadow() {
//     if (window.scrollY > 2) {
//       setShadow(true);
//     } else {
//       setShadow(false);
//     }
//   }

//   useEffect(() => {
//     document.addEventListener("scroll", handleShadow);
//     return document.removeEventListener("scroll", handleShadow);
//   }, []);

//   return (
//     <div className="sticky-top w-100 sticky-header">
//       <div
//         className={`bg-white ${
//           shadow ? "shadow" : "shadow-none"
//         } header-content`}
//       >
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <div>
//                 <div
//                   className="d-flex flex-wrap"
//                   style={{ padding: "12px 0px" }}
//                 >
//                   <div className="d-none d-md-block w-100">
//                     <div className="d-flex align-items-center flex-nowrap">
//                       <div className="d-flex justify-content-start align-items-center flex-nowrap flex-grow-1">
//                         <Logo />
//                         <span className="d-inline-block flex-grow-0 flex-shrink-1 mb-3 me-3"></span>
//                         <div className="w-100 flex-wrap">
//                           <SearchForm />
//                         </div>
//                       </div>
//                       <div className="d-flex justify-content-end flex-nowrap align-items-center">
//                         <span className="d-inline-block flex-grow-0 flex-shrink-1 ms-4 mb-3"></span>
//                         <Link href="/post">
//                           <Button color="primary">POST</Button>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="d-md-none w-100">
//                     <div className="d-flex align-items-center justify-content-center flex-wrap">
//                       <Logo />
//                     </div>
//                     <span
//                       className="d-block"
//                       style={{ marginBottom: "12px" }}
//                     ></span>
//                     <div className="d-flex justify-content-between align-items-center flex-nowrap">
//                       <div className="flex-grow-1">
//                         <SearchForm />
//                       </div>
//                       <span
//                         className="inline-block flex-grow-0 flex-shrink-1 mb-3"
//                         style={{ marginLeft: "12px" }}
//                       ></span>
//                       <Link href="/post">
//                         <Button color="primary">POST</Button>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Header() {
  const addShadow = useWindowHasScrolledPastValue(2);

  return (
    <div
      className={`sticky-top header-top ${
        addShadow ? "shadow" : "shadow-none"
      }`}
    >
      <div className="bg-white">
        <div className="header-height">
          <div className="container">
            <div className="header-content-wrapping">
              <div className="pt-12px pb-12px">
                <HeaderContent1 />
                <HeaderContent2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderContent1() {
  return (
    <div className="d-md-none">
      <div className="row justify-content-center">
        <div className="col-auto">
          <Logo />
        </div>
        <div className="col-12 mb-12px"></div>

        <div className="col-12">
          <div className="d-flex">
            <div className="">
              <Button outlined link="/post">
                POST
              </Button>
            </div>
            <div className="span d-block mb-3 ml-12px"></div>
            <div className="flex-grow-1">
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderContent2() {
  return (
    <div className="d-none d-md-flex align-items-center">
      <Logo />
      <span className="d-inline-block mb-3 ms-3"></span>
      <div className="flex-grow-1">
        <SearchForm />
      </div>
      <span className="d-inline-block mb-3 ml-20px"></span>
      <Button outlined link="/post">
        POST
      </Button>
    </div>
  );
}

// page exported

// page name set

// route set

// seo better

// page loaded

// page interactive

// static html  generated + cached

// dynamic html generetaed

// part generated on cli
