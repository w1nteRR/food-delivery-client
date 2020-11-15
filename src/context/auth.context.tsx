import React, { createContext, FC, useContext, useState, useCallback, useEffect } from 'react'
import { auth0API } from '../api/auth0/auth0.api'

interface AuthState {
   token: string
   sub: string
}

interface User {
    givenName: string
    familyName: string
    picture: string
    email: string
}

interface AuthContextData {
    user: User
    saveAuthData(data: AuthState): void
    removeAuthData(): void
    isAuth: boolean
}

const TOKEN_STORAGE = 'token'
const SUB_STORAGE = 'sub'

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: FC = ({
    children
}) => {

    const [authData, setAuthData] = useState<AuthState>(() => {
        const token = localStorage.getItem(TOKEN_STORAGE)
        const sub = localStorage.getItem(SUB_STORAGE)

        if(token && sub) {
            return {
                token,
                sub
            }
        }

        return {} as AuthState
    })

    const [user, setUser] = useState<User>({} as User)

    const saveAuthData = useCallback((data: AuthState) => {
        Object
            .entries(data)
            .map(item => localStorage.setItem(item[0], item[1]))

        setAuthData({
            token: data.token,
            sub: data.sub
        })
    }, [])

    const removeAuthData = useCallback(() => {
        localStorage.removeItem(TOKEN_STORAGE)
        localStorage.removeItem(SUB_STORAGE)

        setAuthData({} as AuthState)
    }, [])


    useEffect(() => {
        if(!authData.token) return

        (async () => {
            try {

                console.log('api call')

                setUser(await auth0API().getUserData(authData.token, authData.sub))

            } catch (err) {
                console.log(err)
            }

        })()
    }, [authData])

    return (
        <AuthContext.Provider
            value={{
                saveAuthData,
                removeAuthData,
                user,
                isAuth: !!authData.token
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)

    return context
}