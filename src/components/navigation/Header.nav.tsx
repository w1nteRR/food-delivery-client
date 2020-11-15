import React, { FC } from 'react'
import { useHistory } from 'react-router'
import { AppBar, Toolbar, IconButton, Avatar } from '@material-ui/core'
import ShoppingBasket from '@material-ui/icons/ShoppingBasket'

import { useAuth } from '../../context/auth.context'

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
                    aria-label="menu" 
                    color='secondary'
                >
                    <ShoppingBasket />
                </IconButton>
                <IconButton  
                    color="inherit" 
                    aria-label="menu"
                    onClick={() => history.push('/profile')}
                >
                    <Avatar alt={user.familyName} src={user.picture} />
                </IconButton>
            </Toolbar>
    </AppBar>
    )
}