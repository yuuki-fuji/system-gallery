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
          <Link href={`/blog/boe-8rr_a`} passHref><a className="ml-5 text-gray-700 hover:text-gray-900">ABOUT</a></Link>
          <Link href={`/`} passHref><a className="ml-5 text-gray-700 hover:text-gray-900">APP</a></Link>
          <Link href={`/blog`} passHref><a className="ml-5 text-gray-700 hover:text-gray-900">BLOG</a></Link>
          <Link href={`https://github.com/yuuki-fuji`} passHref><a className="ml-5 text-gray-700 hover:text-gray-900" target="_blank" rel="noopener noreferrer">GITHUB</a></Link>
          <Link href={``} passHref><a className="ml-5 text-gray-700 hover:text-gray-900">CONTACT</a></Link>
          </nav>
        </div>
    </>
  );
}
