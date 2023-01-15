import PageHeader from '../components/header/PageHeader'
import Hero from '../components/hero/Hero'
import PoliciesSection from '../components/policies/PoliciesSection'
import ServicesSection from '../components/services/ServicesSection'

export default function Home() {
  return (
    <div>
      <PageHeader />
      <Hero />
      <PoliciesSection />
      <ServicesSection />
    </div>
  )
}
