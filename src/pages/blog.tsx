import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { client } from 'libs/client';
import type { Blog } from 'types/cms-blog-types';
import Link from 'next/link';
import Image from 'next/image';
import styles from 'styles/Home.module.scss';
import React from 'react'

type Props = {
  blogs: Array<Blog>;
};

//SSG
export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({endpoint: "blogs"})

  return {
    props: {
      blogs: data.contents,
    },
  };
};

export default function BlogHome({blogs}: Props) {
  return (
    <>
    <div>
      <ul className="md:grid grid-cols-3 lg:grid-cols-3 gap-4">
      {blogs.map((blog) => (
          <li key={blog.id} className="bg-white mb-[20px]">
            <Link href={`blog/${blog.id}`} passHref>
              <a>
                  <figure className="bg-gray-200">
                    <img
                    src={blog.eyecatch.url}
                    alt=""
                    className="object-cover md:h-[250px] hover:opacity-70 p-[10px]"
                    />
                  </figure>
                  <div className="pl-[20px] pt-[20px] pb-[10px]">
                    <p className="">{blog.title}</p>
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


