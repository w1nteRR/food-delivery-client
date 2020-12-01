import React, { FC } from 'react'
import { Button, Box } from '@material-ui/core'

import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import DnsIcon from '@material-ui/icons/Dns'
import CreditCardIcon from '@material-ui/icons/CreditCard'

import { ProfileCard } from '../cards/Profile.card'

import { useStyles } from './styles'
import { Modal } from '../../pages/profile/Profile'

export const Settings: FC<{ onClick: (modalType: Modal) => void }> = ({
    onClick
}) => {

    const styles = useStyles()

    return (
        <>
        {
            settings.map(i => 
                <ProfileCard title={i.section} key={i.section}>
                    <Box display='flex' flexDirection='column'>
                    {
                        i.buttons.map((btn, index) => 
                            <Button
                                key={index}
                                variant='outlined'
                                color='primary'
                                startIcon={btn.icon}
                                className={styles.btn}
                                onClick={() => onClick(btn.modal)}
                            >
                               {btn.text}
                            </Button>
                        )
                    }
                    </Box>
                </ProfileCard>
            )
        }
        </>
    )
}

const settings = [
    {
        section: 'General',
        buttons: [
            {
                icon: <AccountCircleIcon />,
                text: 'Personal information',
                modal: 'personalInfo' as Modal
            },
            {
                icon: <DnsIcon />,
                text: 'Saved addresses',
                modal: 'savedAddresses' as Modal
            }
        ]
    },
    {
        section: 'Payment',
        buttons: [
            {
                icon: <CreditCardIcon />,
                text: 'My cards',
                modal: 'myCards' as Modal
            }
        ]
    }
]