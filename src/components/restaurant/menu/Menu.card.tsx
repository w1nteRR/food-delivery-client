import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography, Button } from '@material-ui/core'

import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

const useStyles = makeStyles({
    root: {
        width: 300,
        boxShadow: 'none',
        margin: 20
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between'
    } 
})

interface MenuCardProps {
    name: string
    description: string
    price: string
    image: string
    onPriceClick?: () => void
}

export const MenuCard: FC<MenuCardProps> = ({
    name,
    description,
    price,
    image,
    onPriceClick
}) => {

    const styles = useStyles()

    return (
        <Card className={styles.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="150"
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={styles.actions}>
                <IconButton color="secondary">
                    <FavoriteBorderIcon />
                </IconButton>
                <Button
                    variant='outlined'
                    color='primary'
                    onClick={onPriceClick}
                >
                    {price}
                </Button>
            </CardActions>
        </Card>
    )
}