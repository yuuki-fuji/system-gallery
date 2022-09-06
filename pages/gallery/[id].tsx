import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss";

//SSG
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "gallery", contentId: id});

  return {
    props:{
      gallery: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "gallery" });

  const paths = data.contents.map((content) => `/gallery/${content.id}`);
  return {
    paths,
    fallback: false,
  }
}

export default function GalleryId({ gallery }) {
  return (
      <main>
        <h1>{gallery.title}</h1>
        <p>{gallery.publishedAt}</p>
        <div dangerouslySetInnerHTML={{__html: `${gallery.body}`}}></div>
      </main>
  );
}
