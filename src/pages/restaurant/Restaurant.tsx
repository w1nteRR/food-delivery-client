import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Container } from '@material-ui/core'

import restaurants from '../../utils/data/restaurants.json'

import { About } from '../../components/restaurant/About.restaurant'
import { Nav } from '../../components/restaurant/Nav.restaurant'

interface MatchParams {
    id: string
}

interface RestaurantProps extends RouteComponentProps<MatchParams> {}

export const Restaurant: FC<RestaurantProps> = ({
    match
}) => {

    const { id } = match.params

    const rest = restaurants[parseInt(id)]

    return (
        <Container>
            <About 
                name={rest.name}
                tags={rest.tags || ['']}
            />
            <Nav />
        </Container>
    )
}
