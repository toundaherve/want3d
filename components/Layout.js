import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div>
      <div className="min-vh-100 bg-light">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
}
