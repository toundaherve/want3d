import { useState } from "react";
import {useRouter} from "next/router"
import { IoIosCreate } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { MdMenu } from "react-icons/md"
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Button from "./Button";
import useWindowHasScrolledPastValue from "../hooks/useWindowHasScrolledPastValue";

export default function Header() {
  const router = useRouter()
  const addShadow = useWindowHasScrolledPastValue(2);
  const [showSearchBar, setShowSearchBar] = useState(false)

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar)
  }

  return (
    <div
      className={`sticky-top header-top ${
        addShadow ? "shadow" : "shadow-none"
      }`}
    >
      <div className="bg-primary shadow">
        <div className="header-height">
          <div className="container">
            <div className="header-content-wrapping">
              <div className="pt-12px pb-12px">
                <div className="d-flex align-items-center justify-content-between">
                  <Logo />
                  <span className="d-inline-block mb-3 ms-3"></span>
                  <div className="flex-grow-1">
                    <div className="d-none d-lg-block">
                      {router.pathname !== "/" && <SearchBar />}
                    </div>
                  </div>
                  <span className="d-inline-block mb-3 ml-20px"></span>
                  <div className="d-lg-none">
                    <BsSearch color="#FFFFFF" size={18} onClick={toggleSearchBar} />
                    <span className="d-inline-block mb-3 ms-3"></span>
                  </div>
                  <div className="d-lg-none">
                    <a href="/post" className="text-decoration-none">
                      <IoIosCreate color="#FFFFFF" size={24} />
                    </a>
                  </div>
                  <div className="d-none d-lg-block">
                    <Button
                      purpose="link btn-primary text-white border-white text-decoration-none"
                      link="/post"
                    >
                      POST A NEED
                    </Button>
                  </div>
                </div>
                {showSearchBar && <>
                  <span className="d-block" style={{marginBottom: "12px"}}></span>
                  <div className="d-lg-none">
                    <SearchBar fullWidth />
                  </div>
                </>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
