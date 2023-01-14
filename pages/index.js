import PageHeader from '../components/header/PageHeader'
import Hero from '../components/hero/Hero'
import PoliciesSection from '../components/policies/PoliciesSection'

export default function Home() {
  return (
    <div className="container-fluid">
      <PageHeader />
      <Hero />
      <PoliciesSection />
    </div>
  )
}
