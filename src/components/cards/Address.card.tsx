import React, { FC } from 'react'
import { makeStyles, Paper, Typography } from '@material-ui/core'

interface IAddressCardProps {
    address: string
    onCardClick: () => void
}

const useStyles = makeStyles({
    paper: {
        margin: 20,
        padding: 20,
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)',
        cursor: 'pointer',
        '&:hover': {
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.25)',
        }
    }
})


export const AddressCard: FC<IAddressCardProps> = ({
    address,
    onCardClick
}) => {

    const styles = useStyles()

    return (
        <Paper 
            variant="outlined" 
            className={styles.paper}
            onClick={onCardClick}
        >
            <Typography variant='caption'>{address}</Typography>
        </Paper>
    )
}
  