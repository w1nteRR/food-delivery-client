import React, { FC, useCallback, useState } from 'react'
import { Box, Container } from '@material-ui/core'

import { AddressCheckout } from '../../components/checkout/Address.checkout'
import { PaymentCheckout } from '../../components/checkout/Payment.checkout'
import { ContactCheckout } from '../../components/checkout/Contact.checkout'
import { OrderCheckout } from '../../components/checkout/Order.checkout'

export type Payment = 'card' | 'cash'

interface CheckoutState {
    payment: Payment
    phone: string
}

export const Checkout: FC = () => {

    const [checkout, setCheckout] = useState<CheckoutState>({
        payment: 'card',
        phone: '+38'
    })

    const _changePhone = useCallback((phone: string) => {
        setCheckout({
            ...checkout,
            phone
        })
    }, [checkout])

    const _changePayment = useCallback((payment: Payment) => {
        setCheckout({
            ...checkout,
            payment
        })
    }, [checkout])

    return (
        <Container
            maxWidth='sm'
        >
            <Box p={2}>
                <AddressCheckout />
                <PaymentCheckout 
                    method={checkout.payment}
                    onMethodChange={method => _changePayment(method)}
                />
                <ContactCheckout 
                    phone={checkout.phone} 
                    onPhoneChange={phone => _changePhone(phone)}
                />
                <OrderCheckout />
            </Box>
        </Container>
    )
}
