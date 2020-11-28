import React, { FC, useState } from 'react'
import { Dialog, DialogContent, DialogTitle, TextField } from '@material-ui/core'

import { useAutoComplete } from '../../hooks/maps/useAutocomplete'
import { useDebouce } from '../../hooks/useDebounce'
import { AddressCard } from '../cards/Address.card'
import { useLocation } from '../../context/location.context'

export const LocationModal: FC = () => {

    const { modal, toggleModal, addAddress } = useLocation()

    const [inputVal, setInputVal] = useState('')

    const debouncedValue = useDebouce(inputVal, 500)
    const prediticons = useAutoComplete(debouncedValue)

    const _onCardClick = (address: string) => {
        addAddress(address)
        toggleModal()
    }

    return (
        <Dialog
            onClose={toggleModal}
            aria-labelledby="simple-dialog-content" 
            open={modal.isOpen}
        >
            <DialogTitle id="simple-dialog-title">Set delivery address</DialogTitle>
            <DialogContent>
                <TextField 
                    variant='outlined'
                    label='Address'
                    onChange={e => setInputVal(e.target.value)}
                    fullWidth
                />
                {
                    prediticons.map((address, index) => 
                        <AddressCard 
                            key={index} 
                            address={address}
                            onCardClick={() => _onCardClick(address)} 
                        />
                    )
                }
            </DialogContent>
        </Dialog>
    )
}