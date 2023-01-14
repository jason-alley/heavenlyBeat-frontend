import React from 'react'

export default function SectionLayout({ children, title, phrase, bgColor }: { children: any, title: string, phrase: string, bgColor: string }) {
    return (
        <section className="LayoutSection" style={{ backgroundColor: bgColor }}>
            <h2 className="LayoutSection--heading display-4">{title}</h2>
            {phrase ? <p className="LayoutSection--phrase mt-5 mb-5">{phrase}</p> : null}
            <div className="LayoutSection__item-container">
                {children}
            </div>
        </section>
    )
}
