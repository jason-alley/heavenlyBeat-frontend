// Main page header component
import React from "react";
import Link from "next/link";
import Image from 'next/image'

export default function PageHeader() {
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" href="/">HEAVENLY-BEAT</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse flex-grow-0" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link hover-underline-animation" aria-current="page" href="/">Policies</Link>
                <Link className="nav-link hover-underline-animation" href="/">Services</Link>
                <Link className="nav-link hover-underline-animation" href="/">Contact</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
