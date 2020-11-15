import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'


interface IRestaurantCard {
    name: string
}

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        margin: 20,
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)'
    },
    image: {
        height: 160
    }
})

export const RestaurantCard: FC<IRestaurantCard> = ({
    name
}) => {

    const styles = useStyles()

    return (
        <Card className={styles.card}>
            <CardActionArea>
                <CardMedia
                    className={styles.image}
                    image="https://res.cloudinary.com/glovoapp/w_1200,f_auto,q_auto/Stores/ic01vtq4wubqkler3olv"
                    title=""
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Name
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}