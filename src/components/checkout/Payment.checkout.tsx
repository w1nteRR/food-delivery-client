import React, { FC } from 'react'
import { Box, Button, Typography } from '@material-ui/core'

import CreditCardIcon from '@material-ui/icons/CreditCard'
import MoneyIcon from '@material-ui/icons/Money'

import type { Payment } from '../../pages/checkout/Checkout'

export const PaymentCheckout: FC<{ 
    method: Payment
    onMethodChange(method: Payment): void 
}> = ({
    method,
    onMethodChange
}) => {
        
    return (
        <>
        <Typography
            variant='h6'
            component='h2'
        >
            Payment method
        </Typography>
        <Box
            display='flex'
            justifyContent='space-around'
            p={3}
        >
            <Button
                variant='outlined'
                color={method === 'card' ? 'primary' : 'default'}
                startIcon={<CreditCardIcon />}
                fullWidth
                style={{
                    margin: 10,
                    padding: '20px 0'
                }}
                onClick={() => onMethodChange('card')}
            >
                Card
            </Button>
            <Button
                variant='outlined'
                color={method === 'cash' ? 'primary' : 'default'}
                startIcon={<MoneyIcon />}
                fullWidth
                style={{
                    margin: 10,
                    padding: '20px 0'
                }}
                onClick={() => onMethodChange('cash')}
            >
                Cash
            </Button>
        </Box>
        </>
    )
}