import 'styles/reset.css'
import 'styles/globals.scss'
import type { AppProps } from 'next/app';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className="fixed w-full text-gray-600 body-font bg-white border-b border-gray-300 pl-[80px] pr-[80px]">
        <Header />
      </header>
      <main className="bg-gray-100">
        <div className="flex">
          <div className="mt-4 mt-[100px] md:w-[calc(100%_-_360px)] pl-[24px] md:pl-[40px] pr-[24px] md:pr-[40px]"><Component {...pageProps} /></div>
          <div className="hidden md:block md:w-[360px] h-screen text-white bg-gray-400"><Sidebar /></div>
        </div>
      </main>
      <footer>

      </footer>
    </>
  );
}


export default MyApp
