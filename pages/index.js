import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Page from './components/templates/Page'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>shayan NextJs</title>
        <meta name='description' content='' />
      </Head>

      <h1>salam</h1>
      <Page/>
    </div>
  )
}
