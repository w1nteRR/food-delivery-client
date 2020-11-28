import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Header } from '../components/navigation/Header.nav'

import { Auth } from '../pages/auth/Auth'
import { SignIn } from '../pages/auth/SignIn'

import { Profile } from '../pages/profile/Profile'
import { Restaurant } from '../pages/restaurant/Restaurant'
import { Home } from '../pages/home/Home'
import { Checkout } from '../pages/checkout/Checkout'

import { useAuth } from '../context/auth.context'
import { RestaurantProvider } from '../context/restaurant.context'

export const useRoutes = () => {    
    const { isAuth } = useAuth()

    if(isAuth) return (
        <>
        <Header />
        <Switch>
            <Route path='/home' component={Home} />
            <Route path='/profile' component={Profile} />
            <RestaurantProvider>
                <Route path='/restaurant/:id' component={Restaurant} />
                <Route path='/checkout' component={Checkout} />
            </RestaurantProvider>
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