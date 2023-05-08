import PoliciesSection from '../components/policies/PoliciesSection'
import ServicesSection from '../components/services/ServicesSection'
import Layout from '../components/Layout'
import { createClient } from 'next-sanity'

export default function Home({ hero,
  services,
  policies,
  policyDescription,
  contact }) {
  return (
    <Layout>
      <PoliciesSection policies={policies}  description={policyDescription} />
      <ServicesSection />
    </Layout>
  )
}

const client = createClient({
  projectId: "5ttxkg9y",
  dataset: "production",
  apiVersion: "2023-01-02",
  useCdn: false
});

export async function getStaticProps() {
  const hero =  await client.fetch(`*[_type == "hero"]`);
  const services =  await client.fetch(`*[_type == "services"]`);
  const policies =  await client.fetch(`*[_type == "policies"]`);
  const policyDescription =  await client.fetch(`*[_type == "policy-description"]`);
  const contact =  await client.fetch(`*[_type == "contact-section"]`);
  return {
    props: {
      hero,
      services,
      policies,
      policyDescription,
      contact
    }
  }
}