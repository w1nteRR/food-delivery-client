import React, { FC } from 'react'
import { Box, IconButton, Typography } from '@material-ui/core'


export const FoodNavCard: FC<{ image: string, title: string }> = ({
    image,
    title
}) =>
    <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        width='100px'
        margin='20px'
    >
        <IconButton>
            <img src={image} alt="" width='35px' />
        </IconButton>
        <Typography
            variant="overline"
            style={{
                fontSize: '10px'
            }}
        >
            {title}
        </Typography>
    </Box>
