import React, { FC } from 'react'

import { useAuth } from '../../context/auth.context'

export const Restaurant: FC = () => {

    const { user } = useAuth()

    console.log(user)

    return <p>restaurant page</p>
}