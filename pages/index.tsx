import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { client } from '../libs/client'
import type { Gallery } from '../types/cms-types'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import React from 'react'

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
    <>
    <div>
      <ul className="md:grid grid-cols-3 lg:grid-cols-3 gap-4">
      {gallerys.map((gallery) => (
          <li key={gallery.id} className="">
            <Link href={`gallery/${gallery.id}`} passHref>
              <a>
                  <img
                  src={gallery.thumbnail.url}
                  alt=""
                  className="object-cover h-[250px] shadow-2xl delay-150 hover:scale-x-105 hover:scale-y-105 hover:opacity-70"
                  />
                  <p>{gallery.title}</p>
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
      ))}
      </ul>
    </div>
    </>
  );
}

