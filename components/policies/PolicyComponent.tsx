import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

export default function PolicyComponent({policy}: {policy: string}) {
  return (
    <div className="policyItem">
        <FontAwesomeIcon className="policyItem--icon" icon={faCircleInfo} />
        <p className="policyItem--content mt-4">{policy}</p>
    </div>
  )
}
