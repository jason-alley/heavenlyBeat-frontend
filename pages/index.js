import Image from 'next/image'
import PageHeader from '../components/header/PageHeader'
import Hero from '../components/hero/Hero'

export default function Home() {
  return (
    <div className="container-fluid">
      <PageHeader />
      <Hero />
    </div>
  )
}
