import '../styles/global.css'

export default function App({ Component, pageProps }) {
    // can use this App component to keep state when navigating between pages
    return <Component {...pageProps }
    />
}