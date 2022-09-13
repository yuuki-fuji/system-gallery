import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { client } from 'libs/client'
import type { Gallery } from 'types/cms-types'
import Link from 'next/link'
import Image from 'next/image'
import styles from 'styles/Home.module.scss'
import React from 'react'

type Props = {
  gallerys: Array<Gallery>;
};

//SSG
export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({endpoint: "gallery"})

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
          <li key={gallery.id} className="bg-white mb-[20px]">
            <Link href={`gallery/${gallery.id}`} passHref>
              <a>
                  <figure className="bg-gray-200">
                    <img
                    src={gallery.thumbnail.url}
                    alt=""
                    className="object-cover md:h-[250px] hover:opacity-70 p-[10px]"
                    />
                  </figure>
                  <div className="pl-[20px] pt-[20px] pb-[10px]">
                    <p className="">{gallery.title}</p>
                    <p className="text-gray-500">- {gallery.description}</p>
                    <div className="pt-4 pb-2">
                      {gallery.tag && (
                        gallery.tag.map((item,i) =>
                          <span key={i}  className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                            #{item}
                          </span>)
                      )}
                   </div>
                  </div>
              </a>
            </Link>
          </li>
      ))}
      </ul>
    </div>
    </>
    
  );
}


