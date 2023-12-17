import React from "react"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Card from "./components/Card"
import data from "./data"

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
    const cards = data.map(card =>{
        return <Card 
        img={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        location={card.location}
        title= {card.title}
        price={card.price}
        />
    })
    return (
        <div>
            <Navbar />
            <Hero />
            {cards}
        </div>
    )
}