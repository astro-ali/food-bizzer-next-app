import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <h1 className={styles.header} >hello food buzzer</h1>
      <Header />
    </div>
  )
}
