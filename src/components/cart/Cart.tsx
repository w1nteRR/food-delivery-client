import React, { FC } from 'react'

import { Box, Button, Drawer, Typography } from '@material-ui/core'
import { useCart } from '../../context/cart.context'

import { CartItem } from './Cart.item'

export const Cart: FC = () => {
    
    const { cart, toggleCart, removeFromCart, totalPrice, updateItemCount } = useCart()
        
    return (
        <Drawer 
            anchor='right' 
            open={cart.isOpen} 
            onClose={toggleCart}            
        >
            <Box p={3} width='300px'>
            <Typography
                variant='h4'
                component='h2'
            >
                Your Order
            </Typography>
                <Box m={1}>
                    {
                        cart.items.map(i => 
                            <CartItem 
                                key={i._id} 
                                name={i.name} 
                                price={i.price}
                                count={i.count} 
                                onDeleteClick={() => removeFromCart(i._id)}
                                onSelectChange={value => updateItemCount(i._id, value)}
                            />
                        )
                    }
                </Box>
                <Box
                    position='fixed'
                    bottom={10}
                    width='300px'
                >
                    <Button
                        variant='outlined'
                        color='primary'
                        fullWidth
                    >
                        {`Checkout ${totalPrice() + ' UAH'}`}
                    </Button>
                </Box>
            </Box>
          </Drawer>
    )
}