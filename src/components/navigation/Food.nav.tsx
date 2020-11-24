import React, { FC } from 'react'
import Slider from 'react-slick'

import { FoodNavCard } from '../cards/FoodNav.card'

import { food } from '../../utils/data/food'
import { settings } from '../../utils/slider/food.nav'

export const FoodNav: FC = () => {

    return (
        <Slider 
            {...settings} 
            slidesToScroll={food.length} 
            slidesToShow={food.length}
        >
        {
            food.map((food, index) => <FoodNavCard key={index} title={food.title} image={food.image} />)
        }
        </Slider>
    )
}



