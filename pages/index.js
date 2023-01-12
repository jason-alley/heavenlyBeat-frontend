import Head from 'next/head'
import Image from 'next/image'
import PageHeader from '../components/header/PageHeader'

export default function Home() {
  return (
    <div className='container is-widescreen	'>
       <Head>
        <title>HEAVENLY-BEAT</title>
        <meta property="og:title" content="HEAVENLY-BEAT" key="title" />
      </Head>
      <PageHeader />
    </div>
  )
}
