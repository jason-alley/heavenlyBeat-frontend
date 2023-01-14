import React from 'react'
import SectionLayout from '../SectionLayout'
import PolicyComponent from './PolicyComponent'

export default function PoliciesSection() {
  const bgcolor = 'rgba(243, 240, 248, 0.3)'
  const phrase = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ab dolore corporis est beatae rem omnis numquam maxime assumenda. Molestiae.';

  const policies = [
    '20$ deposit required upon booking to secure your spot Deposits are non-refundable.',
    'You have a 15 minute grace period-After that a 10$ fee is applied to you remaining balance. After 30 minutes your appointment will be cancelled.',
    'Contact Us for travelling in the GTA ( fees may apply).'
  ]
  return (
    <SectionLayout title="Policies" phrase={phrase} bgColor={bgcolor}>
        {
          policies.map((policy, index) => {
            return <PolicyComponent policy={policy} key={index} />
          })
        }
    </SectionLayout>
  )
}
