import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Footer from '../components/footer'
import WoozyPudding from '../public/WoozyPudding.png'

const name = 'Spencer Wong'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src={WoozyPudding}
              height={144}
              width={144}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                   src={WoozyPudding}
                   alt="Pompompurin"
                   width={100}
                   height={100}
                   alt={name}
                 />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back</a>
          </Link>
        </div>
      )}
    </div>
  )
}
