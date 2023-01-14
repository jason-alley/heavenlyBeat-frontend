import React from 'react'
import PolicyComponent from './PolicyComponent'

export default function PoliciesSection() {
  const policies = [
    '20$ deposit required upon booking to secure your spot Deposits are non-refundable.',
    'You have a 15 minute grace period-After that a 10$ fee is applied to you remaining balance. After 30 minutes your appointment will be cancelled.',
    'Contact Us for travelling in the GTA ( fees may apply).'
  ]
  return (
    <section className="policiesSection">
      <h2 className="policiesSection--heading display-4">Policies</h2>
      <p className="policiesSection--phrase mt-5 mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ab dolore corporis est beatae rem omnis numquam maxime assumenda. Molestiae.
      </p>

      <div className="policiesSection__policy-container">
        {
          policies.map((policy, index) => {
            return <PolicyComponent policy={policy} key={index} />
          })
        }
      </div>
    </section>
  )
}
