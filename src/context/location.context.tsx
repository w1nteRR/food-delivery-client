import React, { createContext, FC, useContext, useState, useCallback } from 'react'

interface LocationModal {
    isOpen: boolean
}

interface LocationUser {
    address: string | null
}

interface ILocationContext {
    modal: LocationModal
    location: LocationUser
    toggleModal(): void
    addAddress(address: string): void
}

const LocationContext = createContext<ILocationContext>({} as ILocationContext)

const address_ls = 'address'

export const LocationProvider: FC = ({
    children
}) => {

    const [modal, setModal] = useState<LocationModal>({
        isOpen: false
    })

    const [location, setLocation] = useState<LocationUser>({
        address: localStorage.getItem(address_ls)
    })

    const toggleModal = useCallback(() => {
        setModal({
            ...modal,
            isOpen: !modal.isOpen
        })
    }, [modal])

    const addAddress = useCallback((address: string) => {
        localStorage.setItem(address_ls, JSON.stringify(address))

        setLocation({
            address
        })
    }, [])

    return (
        <LocationContext.Provider
            value={{
                modal,
                location,
                toggleModal,
                addAddress
            }}
        >
            {children}
        </LocationContext.Provider>
    )
}

export const useLocation = () => {
    const context = useContext(LocationContext)

    return context
}