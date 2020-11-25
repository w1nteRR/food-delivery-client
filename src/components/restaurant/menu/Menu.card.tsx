import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography, Button } from '@material-ui/core'

import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        boxShadow: 'none',
        margin: 20
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between'
    } 
})

interface MenuCardProps {
    name?: string
    description?: string
    price?: string
}

export const MenuCard: FC<MenuCardProps> = ({
    name,
    description,
    price
}) => {

    const styles = useStyles()

    return (
        <Card className={styles.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="150"
                    image="https://images.ladbible.com/thumbnail?type=jpeg&url=http://beta.ems.ladbiblegroup.com/s3/content/895adf215df95202b6781ea888937fce.png&quality=70&height=700"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                        Big Mac
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                >
                    56 UAH
                </Button>
            </CardActions>
        </Card>
    )
}