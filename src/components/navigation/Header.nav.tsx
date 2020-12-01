import React, { FC } from 'react'
import { useHistory } from 'react-router'
import { AppBar, Toolbar, IconButton, Avatar, Box, SvgIcon } from '@material-ui/core'

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import HomeIcon from '@material-ui/icons/Home'
import { Moped } from 'mdi-material-ui'

import { LocationStatus } from '../location/Location.status'

import { useCart } from '../../context/cart.context'
import { useAuth } from '../../context/auth.context'

import { useStyles } from './styles'

export const Header: FC = () => {

    const { user } = useAuth()
    const { toggleCart, cart } = useCart()

    const styles = useStyles()
    const history = useHistory()

    return (
        <AppBar 
            position="static" 
            color='transparent' 
            className={styles.appBar}
        >
            <Toolbar className={styles.toolBar}>
                <div>
                <IconButton
                    aria-label='menu'
                    color='default'
                    onClick={() => history.push('/home')}
                >
                    <HomeIcon />
                </IconButton>
                <IconButton
                    aria-label='menu'
                    color='default'
                    onClick={() => history.push('/delivery')}
                >
                    <SvgIcon>
                        <Moped />
                    </SvgIcon>
                </IconButton>
                <IconButton 
                    aria-label="menu" 
                    color={cart.items.length ? 'primary' : 'default'}
                    onClick={toggleCart}

                    disabled={!cart.items.length}
                >
                    <ShoppingBasketIcon />
                </IconButton>
                </div>
                <Box display='flex'>
                    <LocationStatus />
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