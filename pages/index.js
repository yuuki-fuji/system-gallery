import { client } from '../libs/client';
import Link from 'next/link'
import styles from '../styles/Home.module.css'

//SSG
export const getStaticProps = async () => {
  const data = await client.get({endpoint: "gallery"})
  console.log(data);

  return {
    props: {
      gallery: data.contents,
    },
  };
};

export default function Home({gallery}) {
  return (
    <div>
      {gallery.map((gallery) => (
        <li key={gallery.id}>
          <Link href={`gallery/${gallery.id}`}>
            <a href="">{gallery.title}</a>
          </Link>
        </li>
      ))}
    </div>
  );
}

