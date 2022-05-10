import React from 'react'
import FooterStat from './FooterStat'

export default function Footer({ name, units }) {


    const element = units.map((unit, index) => {
        return <FooterStat
            key={index}
            state={unit.state}
            value={unit.value}
            noBorder={index === units.length - 1}
        />
    })

    return (
        <div className={`clash-card__unit-stats clash-card__unit-stats--${name} clearfix`}>
            {element}
        </div>
    )
}
