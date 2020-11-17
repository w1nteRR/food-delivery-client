import React, { FC, useState } from 'react'
import { Dialog, DialogContent, DialogTitle, TextField } from '@material-ui/core'

import { useAutoComplete } from '../../hooks/maps/useAutocomplete'
import { useDebouce } from '../../hooks/useDebounce'
import { AddressCard } from '../cards/Address.card'

interface ILocationModalProps {
    isOpen: boolean
    close(): void
}

export const LocationModal: FC<ILocationModalProps> = ({
    isOpen,
    close
}) => {

    const [inputVal, setInputVal] = useState('')

    const debouncedValue = useDebouce(inputVal, 500)
    const prediticons = useAutoComplete(debouncedValue)

    const _onCardClick = (address: string) => {
        localStorage.setItem('address', address)
        close()
    }

    return (
        <Dialog
            onClose={close}
            aria-labelledby="simple-dialog-content" 
            open={isOpen}
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