import React from 'react'

export default function Button({text, type}: {text: string, type: string}) {
  return (
    <>
        <button type="button" className={`btn ${type}`}>{text}</button>
    </>
  )
}
