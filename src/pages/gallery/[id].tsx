import { GetStaticProps, GetStaticPaths } from 'next';
import type { Gallery } from 'types/cms-types';
import { client } from "libs/client";
import styles from "styles/Home.module.scss";

type Props = {
  gallery: Gallery;
};

//SSG
export const getStaticProps: GetStaticProps = async (context) => {
  const id: any = context.params?.id;
  const data = await client.get({ endpoint: "gallery", contentId: id});

  return {
    props:{
      gallery: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "gallery" });

  const paths = data.contents.map((content) => `/gallery/${content.id}`);
  return {
    paths,
    fallback: false,
  }
}

export default function GalleryId({ gallery }: Props) {
  return (
      <>
        <h1>{gallery.title}</h1>
        <p>{gallery.publishedAt}</p>
        <div dangerouslySetInnerHTML={{__html: `${gallery.body}`}}></div>
      </>
  );
}
