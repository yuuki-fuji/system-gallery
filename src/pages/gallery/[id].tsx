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
        <div id="gallery" className="">
          <h1 className="text-2xl">{gallery.title}</h1>
          {/* <p>{gallery.publishedAt}</p> */}
          
          <div className="pt-4 pb-2">
                      {gallery.tag && (
                        <span className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                          #{gallery.tag}
                        </span>
                      )}
          </div>
          <div className="">
                      <img
                      src={gallery.thumbnail.url}
                      alt=""
                      className=""
                      />
          </div>

          <div dangerouslySetInnerHTML={{__html: `${gallery.body}`}}></div>
        </div>
      </>
  );
}
