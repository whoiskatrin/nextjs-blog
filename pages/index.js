import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'

const fetch = require('node-fetch');

export async function getStaticProps() {
  const res = await fetch('/api/balance')
  const balance = await res.json()
  return {
    props: {
      balance
    }
  }
}

export default function Home({ balance }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        Your current balance: {balance.text}
      </section>
    </Layout>
  )
}
