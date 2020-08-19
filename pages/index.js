import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import fetch from 'node-fetch'
import { server } from '../config';

export async function getServerSideProps() {
  const res = await fetch(`${server}/api/balance`)
  const data = await res.json()
  return { props: { data } }
}

export default function Home(balance) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <h1>  Your current balance: {balance.data.text}</h1>
      </section>
    </Layout>
  )
}
