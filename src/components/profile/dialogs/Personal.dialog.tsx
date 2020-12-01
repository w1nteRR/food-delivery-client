import React, { FC, useState } from 'react'
import { Box, DialogContent, DialogTitle, Typography, makeStyles, TextField, Button } from '@material-ui/core'

import PersonIcon from '@material-ui/icons/Person'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone';

import { useAuth } from '../../../context/auth.context'

const useStyles = makeStyles({
    card: {
        border: '.5px solid silver',
        borderRadius: 5,
        width: 360,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '10px 0',
        padding: 20
    }
})

export const PersonalDialog: FC = () => {

    const { user, updateNumber } = useAuth()
    
    const styles = useStyles()

    const [value, setValue] = useState(user.phone || '')

    return (
        <>
            <DialogTitle id="simple-dialog-title">
                Personal information
            </DialogTitle>
            <DialogContent>
                <Box p={3}>
                    <Box className={styles.card}>
                        <PersonIcon />
                        <Typography>
                            {user.name}
                        </Typography>
                    </Box>
                    <Box className={styles.card}>
                        <EmailIcon />
                        <Typography>
                            {user.email}
                        </Typography>
                    </Box>
                    <Box className={styles.card}>
                        <PhoneIcon />
                        <TextField
                            id="input-with-icon-textfield"
                            variant='outlined'
                            onChange={e => setValue(e.target.value)}
                            value={value}
                        />
                    </Box>
                    <Button
                        variant='outlined'
                        color='primary'
                        fullWidth
                        onClick={() => updateNumber(value)}
                    >
                        Update
                    </Button>
                </Box>
                
            </DialogContent>
        </>
    )
}