import "../styles/globals.css";
import "../styles/custom-bootstrap.css"

function MyApp({ Component, pageProps }) {
  return <div className="bg-light">
          <Component {...pageProps} />
        </div>
}

export default MyApp;
