import Footer from "./Footer";
import Header from "./Header";
import Logo from "./Logo";

// content fullHeighted |

// contentContainer gapped between header & footer

// content notHidden by Sticky header

export default function Layout({ children }) {
  return (
    <div>
      <div>
        <Header />
        <div className="container">{children}</div>
        <span className="d-block mb-1"></span>
      </div>
      <Footer />
    </div>
  );
}
