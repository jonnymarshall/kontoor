import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1>Wrangler Components</h1>
        <Link href="/buttons"><a>Buttons</a></Link>
        <Link href="/typography"><a>Typography</a></Link>
        <Link href="/navigation"><a>Navigation</a></Link>
        <Link href="/banners"><a>Banners</a></Link>
        <Link href="/cards"><a>Cards</a></Link>
    </div>
  )
}
