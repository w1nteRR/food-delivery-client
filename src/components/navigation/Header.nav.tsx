import React, { FC } from 'react'
import { useHistory } from 'react-router'
import { AppBar, Toolbar, IconButton, Avatar, Box } from '@material-ui/core'

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import HomeIcon from '@material-ui/icons/Home'

import { useAuth } from '../../context/auth.context'

import { LocationStatus } from '../location/Location.status'

import { useStyles } from './styles'

export const Header: FC = () => {

    const { user } = useAuth()
    const styles = useStyles()
    const history = useHistory()

    return (
        <AppBar 
            position="static" 
            color='transparent' 
            className={styles.appBar}
        >
            <Toolbar className={styles.toolBar}>
                <IconButton
                    aria-label='menu'
                    color='default'
                    onClick={() => history.push('/home')}
                >
                    <HomeIcon />
                </IconButton>
                <Box display='flex'>
                    <LocationStatus />
                    <IconButton 
                        aria-label="menu" 
                        color='default'
                    >
                        <ShoppingBasketIcon />
                    </IconButton>
                    <IconButton  
                        color="inherit" 
                        aria-label="menu"
                        onClick={() => history.push('/profile')}
                    >
                        <Avatar alt={user.familyName} src={user.picture} />
                    </IconButton>
                </Box>
            </Toolbar>
    </AppBar>
    )
}