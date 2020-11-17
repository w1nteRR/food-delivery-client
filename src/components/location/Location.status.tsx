import React, { FC, useState } from 'react'
import { Box, IconButton, Typography } from '@material-ui/core'

import MyLocationIcon from '@material-ui/icons/MyLocation'

import { LocationModal } from './Location.modal'

export const LocationStatus: FC = () => {
    
    const [isModalOpen, setModalStatus] = useState(false)

    const address = localStorage.getItem('address')

    const _addressFormatted = (address: string) => {
        const addressArr = address.split(',')

        return addressArr[0] + addressArr[1]
    }
    
    return (
        <>
        <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
        >
            <Typography 
                variant='overline' 
                style={{ fontSize: 10 }}
            >
                {
                    address ? _addressFormatted(address) : 'Pick up address'
                }
            </Typography>
            <IconButton 
                aria-label="menu" 
                onClick={() => setModalStatus(true)}
            >
                <MyLocationIcon color={address ? 'primary' : 'error'} />
            </IconButton>
        </Box>
        <LocationModal 
            isOpen={isModalOpen} 
            close={() => setModalStatus(false)}
        />
        </>
    )
}