import { Photos } from "@/interfaces/photo";
import Image from "next/image";
import Link from "next/link";
import styles from "./feed.module.css";

export default function FeedPhotos({ photos }: Photos) {
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {photos.map((photo, index) => (
        <li
          className={styles.photo}
          key={photo.id + "-" + index}
          id={photo.id + "_" + index}
        >
          <Link href={`/foto/${photo.id}`} scroll={false}>
            <Image
              src={photo.src}
              title={`${photo.title}, Picture of: ${photo.author}`}
              alt={`${photo.title}, Picture of: ${photo.author}`}
              width={1500}
              height={1500}
              sizes="80vw"
            />
            <span className={styles.visualizacao}>{photo.acessos}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
