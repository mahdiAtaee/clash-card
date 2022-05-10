import React, { useState, useEffect } from 'react'
import Arrow from './Arrow'
import Card from './Card'

export default function Carousel() {

  const [heroes, setHeroes] = useState([])
  const [cursor, setCursor] = useState(0)

  function handleNext() {
    const current = cursor + 1 < heroes.length ? cursor + 1 : 0

    setCursor(current)
  }

  function handlePrev() {
    const current = cursor - 1 < 0 ? (heroes.length - 1) : cursor - 1

    setCursor(current)
  }

  useEffect(() => {
    fetch('http://localhost:3001/heroes')
      .then(response => response.json())
      .then(heroes => setHeroes(heroes))
  }, [])

  return (
    <div className="slide-container">
      <div className="wrapper">

        {!heroes.length ?
          <div>Loading...</div> :
          <>
            <Arrow direction="prev" handleClick={handlePrev} />
            <Card hero={heroes[cursor]} />
            <Arrow direction="next" handleClick={handleNext} />
          </>
        }

      </div>
    </div>
  )
}
