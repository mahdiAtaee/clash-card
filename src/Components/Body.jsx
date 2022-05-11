import React from 'react'
import CardItem from './CardItem'

export default function Body({ level, name, description }) {
    return (
        <>
            <CardItem type="clash-card__level clash-card__level--barbarian">{level}</CardItem>
            <CardItem type="clash-card__unit-name">The {name}</CardItem>
            <CardItem type="clash-card__unit-description">{description}</CardItem>
        </>
    )
}
