import Image from 'next/image';
import styles from './round-header.module.css';
import Link from 'next/link';

export function RoundHeader() {
  return (
    <header className={styles.appHeader}>
      <div className={styles.container}>

        <nav className={styles.appNav}>
          <div className={styles.navRight}>
            <Image
              src="/images/rts.png"
              alt="rts-logo"
              width={45}
              height={45}
            />

            <Link href="/dashboard" style={{ marginLeft: 10 }}>Catálogo de compra</Link>
            <Link href="/dashboard">Gama de productos</Link>
            <Link href="/dashboard">Descargas</Link>
          </div>

          <div className={styles.navLeft}>
            <input type="text" placeholder="Encuentra tu pieza" />
            <button>Login</button>
          </div>
        </nav>

      </div>
    </header>
  );
}