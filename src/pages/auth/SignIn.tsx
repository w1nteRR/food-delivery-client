import React, { FC } from 'react'
import { Button, Container } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import { useAuth0 } from '@auth0/auth0-react'

import { useStyles } from '../../components/auth/styles'

export const SignIn: FC = () => {

    const { loginWithRedirect } = useAuth0()
    const styles = useStyles()
   
    return (
        <Container 
            maxWidth='sm'
            className={styles.container}
        >
            <Button
                fullWidth
                variant='outlined'
                color='secondary'
                onClick={() => loginWithRedirect({
                    connection: 'google-oauth2'
                })}

                style={{
                    padding: 30
                }}
            >
                Continue with Google
            </Button>
            <Button
                fullWidth
                variant='outlined'
                color='primary'
                startIcon={<FacebookIcon />}
                style={{
                    padding: 30
                }}
            >
                Continue with Facebook
            </Button>
        </Container>
    )
}