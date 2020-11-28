import React, { FC } from 'react'
import { Box, TextField, Typography } from '@material-ui/core'

export const ContactCheckout: FC<{ 
    phone: string
    onPhoneChange(value: string): void 
}> = ({
    phone,
    onPhoneChange
}) => {
    return (
        <>
        <Typography
            variant='h6'
            component='h2'
        >
            Contact information
        </Typography>
        <Box p={3}>
            <TextField 
                label="Phone number" 
                variant="outlined" 
                fullWidth
                onChange={e => onPhoneChange(e.target.value)}
                value={phone}
            />
        </Box>
        </>
    )
}