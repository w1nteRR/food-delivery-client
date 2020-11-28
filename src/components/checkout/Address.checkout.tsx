import React, { FC } from 'react'
import { Box, Button, Paper, SvgIcon, Typography } from '@material-ui/core'

import { useLocation } from '../../context/location.context'
import { useRestaurant } from '../../context/restaurant.context'
import { Moped } from 'mdi-material-ui'

export const AddressCheckout: FC = () => {
    
    const { toggleModal, location } = useLocation()
    const { deliveryInformation: { deliveryTime } } = useRestaurant()
    
    return (
        <>
        <Typography
            variant='h6'
            component='h2'
        >
            Delivery address
        </Typography>
        <Box p={3}>
            <Paper elevation={1}>
                <Box p={3} m={2}>
                    <Typography 
                        variant='overline'
                    >
                        {location.address}
                    </Typography>
                </Box>
            </Paper>
            <Box 
                display='flex' 
                alignItems='center' 
                width='100px'
                justifyContent='space-between'
                margin='20px 0'
            >
                <SvgIcon>
                    <Moped />
                </SvgIcon>
                <Typography
                    variant='overline'
                >
                    {deliveryTime}
                </Typography>
            </Box>
            <Button
                variant='outlined'
                color='primary'
                fullWidth
                onClick={toggleModal}
            >
                Change address
            </Button>
        </Box>
        </>
    )
}