import React from 'react'

export default function Header({ src, name }) {
    return (
        <div className={`clash-card__image clash-card__image--${name}`}>
            <img src={src} alt={name} />
        </div>
    )
}
