import { Typography } from '@material-ui/core'
import React, { FC } from 'react'
import Slider from 'react-slick'

interface SectionProps {
    title: string
}

export const Section: FC<SectionProps> = ({
    title,
    children
}) => {

    return (
        <>
        <Typography
            variant='h6'
            component='h2'
        >
           {title}
        </Typography>
        <Slider {...settings}>
            {children}
        </Slider>
        </>
    )
}

const settings = {
    speed: 500,
    slidesToShow: 3,
    rows: 1,
    infinite: false
}