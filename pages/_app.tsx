import '../styles/reset.css'
import '../styles/globals.scss'
import type { AppProps } from 'next/app';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className="text-gray-600 body-font bg-white border-b border-gray-300 pl-[80px] pr-[80px]">
        <Header />
      </header>
      <main className="mt-4 pl-[24px] md:pl-[80px] pr-[24px] md:pr-[80px]">
        <Component {...pageProps} />
      </main>
      <footer>

      </footer>
    </>
  );
}


export default MyApp
