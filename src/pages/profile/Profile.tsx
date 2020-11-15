import React, { FC } from 'react'
import { Button } from '@material-ui/core'
import { useAuth } from '../../context/auth.context'

export const Profile: FC = () => {

    const { removeAuthData } = useAuth()
      
    return (
        <Button
            variant='outlined'
            color='secondary'
            onClick={() => removeAuthData()}
        >
            Exit
        </Button>
    )
}