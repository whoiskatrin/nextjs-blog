import Head from 'next/head'
import React from 'react'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import fetch from 'node-fetch'
import { server } from '../config';
import { signIn, signOut, useSession } from 'next-auth/client'

export async function getServerSideProps() {
  const res = await fetch(`${server}/api/balance`)
  const data = await res.json()
  return { props: { data } }
}

export default function Home(balance) {
  const [ session, loading ] = useSession()

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      {!session && <>
        Not signed in <br/>
        <button onClick={signIn}>Sign in</button>
      </>}
      {session && <>
        Signed in as {session.user.email} <br/>
        <h1>  Your current balance: {balance.data.text}</h1>
        <button onClick={signOut}>Sign out</button>
      </>}
      </section>
    </Layout>
  )
}
