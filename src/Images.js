import React, { useState, useEffect } from 'react'
import DogCard from './DogCard'

function Image() {
    const [images, setImages] = useState([])


    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((r) => r.json())
            .then((dogs) => setImages(dogs))
    }, [])


    // console.log('I have come to life')
    return (
        <div>
            <p>Images live here</p>
            <img src='https://media.tenor.com/obrhQVdoPUsAAAAM/cholito-falling-down.gif' alt="falling"></img>
            <button onClick={images.url}>Get A New Dog</button>
            <DogCard images={images} />
        </div>
    )
}

export default Image
