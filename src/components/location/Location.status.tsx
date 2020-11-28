import React, { FC } from 'react'
import { Box, IconButton, Typography } from '@material-ui/core'

import MyLocationIcon from '@material-ui/icons/MyLocation'

import { LocationModal } from './Location.modal'
import { useLocation } from '../../context/location.context'

export const LocationStatus: FC = () => {

    const { toggleModal, location } = useLocation()
    
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
                    location.address ? _addressFormatted(location.address) : 'Pick up address'
                }
            </Typography>
            <IconButton 
                aria-label="menu" 
                onClick={toggleModal}
            >
                <MyLocationIcon color={location.address ? 'primary' : 'error'} />
            </IconButton>
        </Box>
        <LocationModal />
        </>
    )
}