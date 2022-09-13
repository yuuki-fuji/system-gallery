
import { GetStaticProps, GetStaticPaths } from 'next';
import type { Blog } from 'types/cms-blog-types';
import { client } from "libs/client";
import styles from "styles/Home.module.scss";

type Props = {
  blog: Blog;
};

//SSG
export const getStaticProps: GetStaticProps = async (context) => {
  const id: any = context.params?.id;
  const data = await client.get({ endpoint: "blogs", contentId: id});

  return {
    props:{
      blog: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths,
    fallback: false,
  }
}

export default function GalleryId({ blog }: Props) {
  return (
      <>
        <div id="gallery" className="">
          <h1 className="text-2xl">{blog.title}</h1>
          {/* <p>{gallery.publishedAt}</p> */}

          <div className="">
                      <img
                      src={blog.eyecatch.url}
                      alt=""
                      className=""
                      />
          </div>

          <div dangerouslySetInnerHTML={{__html: `${blog.content}`}}></div>
        </div>
      </>
  );
}
