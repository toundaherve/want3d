import { useEffect, useState } from "react";

export default function useWindowHasScrolledPastValue(value) {
  const [hasScrolledPast, setHasScrolledPast] = useState(false);

  function handleScroll() {
    if (window.scrollY > value) {
      setHasScrolledPast(true);
    } else {
      setHasScrolledPast(false);
    }
  }

  useEffect(() => {
    document.onscroll = handleScroll;
    return document.removeEventListener("scroll", handleScroll);
  }, []);

  return hasScrolledPast;
}
