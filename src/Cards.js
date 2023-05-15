import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import "./Cards.css"

const Cards = () => {
  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }
  
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }
  const [people, setPeople] = useState([
    {
      name: "Mr.Rana",
      url: "https://wallpapercave.com/wp/wp7097182.jpg"
    },
    {
      name: "Mr. Kana",
      url: "https://www.hayfestival.com/images/product/large/19068.jpg"
    },
    {
      name: "Mr. Kana",
      url: "https://wallpapercave.com/wp/wp5120843.jpg"
    },
    {
      name: "Mr. Kana",
      url: "https://i.pinimg.com/736x/f2/6b/2c/f26b2c3375469801f7fb7bc45222b272.jpg"
    },
    {
      name: "Mr. Kana",
      url: "https://i.pinimg.com/736x/b9/ab/17/b9ab173b81ffb54cfb509fed9011a53c.jpg"
    },
    {
      name: "Mr. Kana",
      url: "https://cdn.fansshare.com/photograph/beautifulgirls/beautiful-girl-wallpapers-pictures-for-facebook-1429221492.jpg"
    }
  ])
  return (
    <div className='cards__container'>
      {
        people.map((person, index) => (
          <TinderCard
          onSwipe={onSwipe}
          onCardLeftScreen={() => onCardLeftScreen('fooBar')}
            className='swipe'
            key={index}
            preventSwipe={['right', 'left']}
          //  preventSwipe={['up', 'down']}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className='card'
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))
      }
    </div>
  )
}

export default Cards
