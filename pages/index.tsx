import { GetStaticProps, GetStaticPaths } from 'next';
import { client } from '../libs/client';
import type { Gallery } from '../types/gallery';
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
    <div className="font-bold">
      {gallerys.map((gallery) => (
        <li key={gallery.id}>
          <Link href={`gallery/${gallery.id}`} passHref>
            <a>{gallery.title}</a>
          </Link>
        </li>
      ))}
    </div>
  );
}
