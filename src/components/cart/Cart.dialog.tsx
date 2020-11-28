import React, { FC } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'

import { useCart } from '../../context/cart.context'

export const CartDialog: FC = () => {

    const { cartDialog, cleanCart, closeCartDialog } = useCart()

    const _onAgree = () => {
        cleanCart()
        closeCartDialog()
    }

    return (
        <Dialog
            open={cartDialog.isOpen}
            onClose={closeCartDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle>You have an unfinished order in another restaurant</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    The basket will be cleaned
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeCartDialog} color="primary">
                    Disagree
                </Button>
                <Button onClick={_onAgree} color="primary" autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    )
}