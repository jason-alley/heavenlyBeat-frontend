// Main page header component
import React from "react";
import Link from "next/link";
import Image from 'next/image'

export default function PageHeader() {
  return (
    <>
      <header className="header">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" href="/">HEAVENLYBEAT</Link>
           </div>
            <div className="navbar-menu is-active">
              <ul>
                <li>
                  <Link href="">Policies</Link>
                </li>
                <li>
                  <Link href="">Services</Link>
                </li>
                <li>
                  <Link href="">Contact</Link>
                </li>
              </ul>
            </div>
            <p role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </p>
  
        </nav>
      </header>
    </>
  )
}
