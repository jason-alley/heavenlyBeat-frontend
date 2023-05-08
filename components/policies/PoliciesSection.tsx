import React from 'react'
import SectionLayout from '../SectionLayout'
import PolicyComponent from './PolicyComponent'

interface Policies {
  policies: Array<Object>;
}


export default function PoliciesSection({policies, description}) {
  const bgcolor = 'rgba(243, 240, 248, 0.3)'

  return (
    <SectionLayout title="Policies" phrase={description[0].description} bgColor={bgcolor}>
        {
          policies.map((policy, _id) => {
            return <PolicyComponent policy={policy.policy} key={policy._id} />
          })
        }
    </SectionLayout>
  )
}
