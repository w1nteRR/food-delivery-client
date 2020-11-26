import React, { FC } from 'react'
import { useHistory } from 'react-router'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Card, CardActionArea, CardContent, CardMedia, SvgIcon, Typography } from '@material-ui/core'

import TimerIcon from '@material-ui/icons/Timer'
import { Moped } from 'mdi-material-ui'
import { Tag } from '../utils/Tag'

interface IRestaurantCard {
    name: string
    image: string
    tags: Array<string>
    deliveryTime: string
    deliveryPrice: string
    _id: string
}

const useStyles = makeStyles({
    card: {
        width: 375,
        margin: '30px 10px',
        boxShadow: 'none',
    },
    image: {
        height: 200
    }
})

export const RestaurantCard: FC<IRestaurantCard> = ({
    name,
    image,
    tags,
    deliveryPrice,
    deliveryTime,
    _id
}) => {

    const styles = useStyles()
    const history = useHistory()

    return (
        <Card className={styles.card}>
            <CardActionArea onClick={() => history.push(`/restaurant/${_id}`)}>
                <CardMedia
                    className={styles.image}
                    image={image}
                    title=""
                />
                <CardContent>
                    <Typography 
                        gutterBottom 
                        variant="h6" 
                        component="h2"
                    >
                        {name}
                    </Typography>
                    <Box display='flex' justifyContent='space-between'>
                        <Tag 
                            icon={<TimerIcon fontSize='small' />}
                            text={deliveryTime}
                        />
                            <Tag 
                            icon={
                                <SvgIcon fontSize='small'>
                                    <Moped />
                                </SvgIcon>
                            }
                            text={deliveryPrice}
                        />
                    </Box>
                    <Box margin='10px 0'>
                    {
                        tags.map((tag, index) => 
                            <Typography 
                                key={index} 
                                variant="overline" 
                                style={{ margin: '0 10px 0 0' }}
                            >
                                {tag}
                            </Typography>
                        )
                    }
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}