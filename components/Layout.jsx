import React from 'react'
import PageHeader from '../components/header/PageHeader'
import Hero from '../components/hero/Hero'
import Contact from '../components/contact/Contact'

export default function Layout({ children }) {
    return (
        <>
            <PageHeader />
            <Hero />
            <main>{ children }</main>
            <Contact />
        </>
    )
}
