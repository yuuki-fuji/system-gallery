import Link from 'next/link';

export default function Header() {
  return (
    <>
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center h-[80px]">
          <Link href={'/'} passHref>
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <span className="text-xl text-gray-700">System-gallery</span>
            </a>
          </Link>
          <nav className="hidden md:block md:ml-auto flex flex-wrap items-center text-base justify-center ">
            <a className="ml-5 text-gray-700 hover:text-gray-900">ABOUT</a>
            <a className="ml-5 text-gray-700 hover:text-gray-900">BLOG</a>
            <a className="ml-5 text-gray-700 hover:text-gray-900">GITHUB</a>
            <a className="ml-5 text-gray-700 hover:text-gray-900">CONTACT</a>
          </nav>
        </div>
    </>
  );
}
