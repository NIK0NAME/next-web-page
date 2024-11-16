import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.carrusell}>
        <video
          className={styles.carrusellSlide}
          autoPlay
          playsInline
          muted
          loop
          style={{ height: '100%' }}
        >
          <source
            src="https://www.rts-sa.com/build/web/img/home/20231204-home-video-en.mp4?v=202312220620" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
