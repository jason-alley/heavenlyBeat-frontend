import React from 'react'

export default function Button({text}: {text: string}) {
  return (
    <div>
        <button type="button" className="btn btn-outline-secondary">{text}</button>
    </div>
  )
}
