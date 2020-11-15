import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Header } from '../components/navigation/Header.nav'

import { Auth } from '../pages/auth/Auth'
import { SignIn } from '../pages/auth/SignIn'

import { Profile } from '../pages/profile/Profile'
import { Restaurant } from '../pages/restaurant/Restaurant'
import { Home } from '../pages/home/Home'

import { useAuth } from '../context/auth.context'

export const useRoutes = () => {    
    const { isAuth } = useAuth()

    if(isAuth) return (
        <>
        <Header />
        <Switch>
            <Route path='/home' component={Home} />
            <Route path='/profile' component={Profile} />
            <Route path='/restaurant' component={Restaurant} />

            <Redirect to='/home' />
        </Switch>
        </>
    )

    return (
        <Switch>            
            <Route exact path='/' component={Auth} />
            <Route path='/signin' component={SignIn} />
            
            <Redirect to='/signin' />
        </Switch>
    )
}