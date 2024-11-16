import Image from 'next/image';
import styles from './original-header.module.css';
import Link from 'next/link';

export function OriginalHeader() {
  return (
    <header className={styles.appHeader}>
      <div className={styles.container}>

        <nav className={styles.appNav}>
          <div className={styles.navLeft}>
            <Link href="/">
              <Image
                src="/images/rts.png"
                alt="rts-logo"
                width={122}
                height={122}
              />
            </Link>
          </div>

          <div className={styles.navRight}>
            <div className={styles.navRow}>
              <Link href="/">
                <img
                  src="https://www.rts-sa.com/build/web/img/layout/icon-linkedin.png"
                  alt="rts-logo"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="/">
                <img
                  src="https://img.icons8.com/win10/512/FFFFFF/instagram-new.png"
                  alt="rts-logo"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="/" style={{ marginRight: 10 }}>
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-white-icon.png"
                  alt="rts-logo"
                  width={20}
                  height={20}
                />
              </Link>

              <button>PORTAL DE CLIENTE</button>
              <button>PORTAL DE PROVEEDORES</button>
            </div>

            <div className={styles.navRow}>
              <Link href="/dashboard" style={{ marginLeft: 10 }}>Catálogo de compra</Link>
              <Link href="/dashboard">Gama de productos</Link>
              <Link href="/dashboard">Descargas</Link>
              <input style={{ width: 250 }} type="text" placeholder="Encuentra tu pieza" />
            </div>

            <div className={styles.navRow} style={{ marginTop: 20 }}>
              <Link href="/dashboard" style={{ marginLeft: 10 }}>Catálogo de compra</Link>
              <Link href="/dashboard">Gama de productos</Link>
              <Link href="/dashboard">Descargas</Link>
            </div>
            
          </div>
        </nav>

      </div>
    </header>
  );
}