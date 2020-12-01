import React, { FC } from 'react'
import { Box } from '@material-ui/core'

export const OrderCard: FC = ({
    children
}) => 
    <Box 
        border='.5px solid silver'
        borderRadius='5px'
        p={2}
        margin='20px 0'
        display='flex'
        justifyContent='space-around'
        alignItems='center'
    >
        {children}
    </Box>
    
