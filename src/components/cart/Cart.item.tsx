import React, { FC } from 'react'
import { Box, IconButton, Paper, Typography, FormControl, Select, MenuItem } from '@material-ui/core'

import DeleteIcon from '@material-ui/icons/Delete'

interface CartItemProps {
    name: string
    count: number
    price: string
    onDeleteClick?: () => void
    onSelectChange: (e: any) => void
}

export const CartItem: FC<CartItemProps> = ({
    name,
    count,
    price,
    onDeleteClick,
    onSelectChange
}) => 
   <Paper elevation={0} style={{
       margin: '20px 0',
       border: '.5px solid silver',
       borderRadius: 5
    }}>
        <Box
            p={3}
            display='flex'
            justifyContent='space-between'
            flexDirection='column'
        >
            <Box display='flex' justifyContent='space-between' alignItems='center'>
            <Typography
                variant='overline'
            >
                {name}
            </Typography>
            <Typography>
                {price}
            </Typography>
            </Box>
            <Box>
                <FormControl variant="outlined">
                <Select
                    value={count}
                    onChange={e => onSelectChange(e.target.value)}
                    style={{
                        height: '30px'
                    }}
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                </Select>
                </FormControl>
            </Box>
            <Box 
                display='flex' 
                justifyContent='flex-end'
            >
                <IconButton  
                    aria-label="delete" 
                    color="secondary"
                    onClick={onDeleteClick}
                >
                    <DeleteIcon fontSize='small' />
                </IconButton>
            </Box>
       </Box>
   </Paper>