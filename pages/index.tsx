import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { client } from '../libs/client'
import type { Gallery } from '../types/cms-types'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

type Props = {
  gallerys: Array<Gallery>;
};

//SSG
export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({endpoint: "gallery"})
  console.log(data);

  return {
    props: {
      gallerys: data.contents,
    },
  };
};

export default function Home({gallerys}: Props) {
  return (
    <div className="md:grid grid-cols-3 lg:grid-cols-3 gap-4">
      {gallerys.map((gallery) => (
        <ul>
          <li key={gallery.id} className="">
            <Link href={`gallery/${gallery.id}`} passHref>
              <a>
                <div>
                  <img 
                  src={gallery.thumbnail.url}
                  alt=""
                  className="object-contain"
                  />
                  <p>{gallery.title}</p>
                </div>
              </a>
            </Link>
            <div className="px-6 pt-4 pb-2">
                {gallery.tag && (
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #{gallery.tag}
                  </span>
                )}
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
}

