import React, { FC, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Box, Container, LinearProgress } from '@material-ui/core'

import { useAuth } from '../../context/auth.context'

export const Auth: FC = () => {

    const { getAccessTokenSilently, user, isAuthenticated, isLoading } = useAuth0()
    const { saveAuthData } = useAuth()

    useEffect(() => {
        if(isAuthenticated) {
            (async () => {
                try {

                    const token = await getAccessTokenSilently()

                    saveAuthData({
                        token,
                        sub: user.sub
                    })

                } catch (err) {
                    console.log(err)
                }
            })()
        }
    }, [isAuthenticated])

    if(isLoading) return (
        <Container
            maxWidth='sm'
        >
            <Box 
                height='50vh'
                alignItems='flex-end'
                display='flex'
            >
                <Box width='100%'>
                    <LinearProgress />
                </Box>
            </Box>
        </Container>        
    )

    return <></>
}