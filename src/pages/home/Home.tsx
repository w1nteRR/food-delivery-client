import React, { FC } from 'react'
import { Box, Container } from '@material-ui/core'

import { RestaurantCard } from '../../components/cards/Restaurant.card'
import { FoodNav } from '../../components/navigation/Food.nav'

import restaurants from '../../utils/data/restaurants.json'

console.log(restaurants)

export const Home: FC = () => {
    return (
        <Container 
            maxWidth='lg' 
        >
            <FoodNav />
           <Box
                display='flex'
                flexGrow='0'
                flexShrink='1'
                flexWrap='wrap'
                justifyContent='center'
           >
                {
                    restaurants.map((rest, index) => 
                        <RestaurantCard 
                            key={index} 
                            name={rest.name} 
                            image={rest.image} 
                            tags={rest.tags || ['']} 
                            deliveryPrice={rest.deliveryPrice}
                            deliveryTime={rest.deliveryTime}
                            _id={rest._id}
                        />
                    )
                }

                <div style={filter}></div>
                <div style={filter}></div>
                <div style={filter}></div>

           </Box>
        </Container>
    )
}

const filter = {
    width: 375,
    margin: 10
}