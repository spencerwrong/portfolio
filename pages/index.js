import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'
import WoozyPudding from '../public/WoozyPudding.png'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spencer Wong | Portfolio</title>
        <meta name="Spencer Wong's Portfolio"/>
      </Head>

      <main className={styles.main}>
        <h1 className="title">
          <Link href="/about">Spencer Wong</Link>
        </h1>
        <Image
           src={WoozyPudding}
           alt="Pompompurin"
         />
        <section className={utilStyles.headingMd}>
          <p>Hello, I am Spencer Wong. Welcome to my personal website.</p>
        </section>
        <div className={styles.grid}>
          <Link href="/about" className={styles.card}>
            <a>
              <h2>About Me &rarr;</h2>
              <p>A little about myself</p>
            </a>
          </Link>
        </div>
        <div className={styles.grid}>
          <Link href="/experience" className={styles.card}
          >
            <a>
              <h2>Experience &rarr;</h2>
              <p>My previous and current work experience</p>
            </a>
          </Link>
        </div>
        <div className={styles.grid}>
          <Link href="/projects" className={styles.card}>
            <a>
              <h2>Projects &rarr;</h2>
              <p>All of my personal projects.</p>
            </a>
          </Link>
        </div>
        <div className={styles.grid}>
          <Link href="/resume" className={styles.card}
          >
            <a>
              <h2>Resume &rarr;</h2>
              <p>A summary of all my work.</p>
            </a>
          </Link>
        </div>
      </main>
        <Footer className={styles.footer}>Footer</Footer>
    </div>
  )
}
