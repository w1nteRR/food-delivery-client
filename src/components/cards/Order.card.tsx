import React, { FC } from 'react'
import { Paper, Box } from '@material-ui/core'

export const OrderCard: FC = ({
    children
}) => 
    <Paper elevation={2}>
        <Box 
            p={2}
            m={2}
            display='flex'
            justifyContent='space-around'
            alignItems='center'
        >
            {children}
        </Box>
    </Paper>
