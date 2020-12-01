import React, { FC } from 'react'
import { Box, Typography } from '@material-ui/core'

export const ProfileCard: FC<{ title: string }> = ({
    children,
    title
}) => 
    <Box
        margin='20px 0'
    >
        <Typography
            variant='h6'
            component='h2'
        >
            {title}
        </Typography>
        <Box
            p='50px 20px'
            margin='20px 0'
        >
            {children}
        </Box>
    </Box>