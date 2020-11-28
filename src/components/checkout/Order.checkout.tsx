import React, { FC } from 'react'
import { Box, Button, Typography, SvgIcon } from '@material-ui/core'
import { Moped } from 'mdi-material-ui'

import { OrderCard } from '../cards/Order.card'

import { useCart } from '../../context/cart.context'
import { useRestaurant } from '../../context/restaurant.context'

export const OrderCheckout: FC = () => {
    
    const { cart, totalPrice } = useCart()
    const { deliveryInformation: { deliveryPrice } } = useRestaurant()
    
    return (
        <>
        <Typography
            variant='h6'
            component='h2'
        >
            Your order
        </Typography>
        <Box p={3}>
        {
            cart.items.map(item => 
                    <OrderCard key={item._id}>
                        <Typography
                            variant='overline'
                        >
                            {item.name}
                        </Typography>
                        <Typography
                            variant='overline'
                        >
                            {item.count}
                        </Typography>
                        <Typography>
                            {item.price}
                        </Typography>
                    </OrderCard>
                )
        }
        <OrderCard>
            <Typography 
                variant='overline'
            >
                delivery
            </Typography>
            <SvgIcon>
                <Moped />
            </SvgIcon>
            <Typography>
                40 UAH
            </Typography>
        </OrderCard>
        <Button
            color='primary'
            variant='outlined'
            fullWidth
        >
            {`Confirm order ${totalPrice() + parseInt(deliveryPrice.slice(0, -3))} UAH`}
        </Button>
        </Box>
        </>
    )
}