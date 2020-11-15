import React, { FC } from 'react'
import { Box, Container } from '@material-ui/core'

import { RestaurantCard } from '../../components/cards/Restaurant.card'

export const Home: FC = () => {
    return (
        <Container maxWidth='lg'>
            <Box
                display='flex'
                flexWrap='wrap'
                justifyContent='center'
            >
                <RestaurantCard name='test' />
                <RestaurantCard name='test' />
                <RestaurantCard name='test' />
                <RestaurantCard name='test' />
            </Box>
        </Container>
    )
}
