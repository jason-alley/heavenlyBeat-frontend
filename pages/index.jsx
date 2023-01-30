import PoliciesSection from '../components/policies/PoliciesSection'
import ServicesSection from '../components/services/ServicesSection'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <PoliciesSection />
      <ServicesSection />
    </Layout>
  )
}
