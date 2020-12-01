import React, { FC, ReactNode } from 'react'
import { Dialog } from '@material-ui/core'

import { SettingsModal } from '../../pages/profile/Profile'

interface SettingsDialogProps extends SettingsModal {
    content: ReactNode
    onCloseClick: () => void
}

export const SettingsDialog: FC<SettingsDialogProps> = ({
    isOpen,
    content,
    onCloseClick
}) => {

    return (
        <Dialog
            onClose={onCloseClick}
            aria-labelledby="simple-dialog-content" 
            open={isOpen}
        >
            {content}
        </Dialog>
    )
}