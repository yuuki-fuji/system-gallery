import '../styles/reset.css'
import '../styles/globals.scss'
import type { AppProps } from 'next/app';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className="text-gray-600 body-font bg-blue-500">
        <Header />
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>

      </footer>
    </>
  );
}


export default MyApp
