import React, { FC, ReactNode } from 'react'
import { Box, Typography } from '@material-ui/core'

interface TagProps {
    text: string
    icon: ReactNode
}

export const Tag: FC<TagProps> = ({
    text,
    icon
}) =>
    <Box
        display='flex'
        justifyContent='space-between'
    >
        {icon}
        <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{
                marginLeft: 10
            }}
        >
            {text}
        </Typography>
    </Box>
