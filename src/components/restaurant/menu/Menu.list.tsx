import React, { FC } from 'react'
import { Box, Typography } from '@material-ui/core'

import { IMenu } from '../../../interfaces/menu/IMenu'
import { MenuCard } from './Menu.card'

import { useCart } from '../../../context/cart.context'
import { useRestaurant } from '../../../context/restaurant.context'

export const MenuList: FC<{ menu: Array<IMenu> }> = ({
    menu
}) => {

    const { addToCart } = useCart()
    const { restaurant } = useRestaurant()

    return (
        <>
        {
            menu.map((section, index) => 
                <Box key={index} m={1}>
                    <Typography
                        variant='h5'
                        component='h2'
                    >
                        {section.sectionName}
                    </Typography>
                    <Box
                        display='flex'
                        flexGrow='0'
                        flexShrink='1'
                        flexWrap='wrap'
                        justifyContent='center'
                    >
                        {
                            section.items.map(item => 
                                <MenuCard
                                    key={item._id}
                                    name={item.name}
                                    image={item.image}
                                    price={item.price}
                                    description={item.description}
                                    onPriceClick={() => addToCart(
                                        {
                                            name: item.name,
                                            price: item.price,
                                            count: 1,
                                            _id: item._id
                                        }, 
                                        restaurant._id!
                                        )
                                    }
                                />
                            )
                        }
                        <div style={filter} />
                        <div style={filter} />
                        <div style={filter} />
                    </Box>
                </Box>
                )
        }
        </>
    )
}

const filter = {
    width: 300,
    margin: 20
}