import React from 'react'
import { cards } from '../data'
import CatCard from './catcard/CatCard'
import Features from './features/Features'
import Slide from './slide/Slide'
import TrustedBy from './trustedby/TrustedBy'

const Home = () => {
  return (
    <div>
      <Features/>
      <TrustedBy/>
      <Slide slidesToShow={5} arrowsScroll={5}>
        {
          cards?.map(card =>{
            <CatCard key={card?.id} items={card} />
          })
        }
      </Slide>
    </div>
  )
}

export default Home