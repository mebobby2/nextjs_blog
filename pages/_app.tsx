import "../styles/global.css";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  // can use this App component to keep state when navigating between pages
  return <Component {...pageProps} />;
};

export default App;
