import React from 'react'
import {  makeStyles } from '@mui/styles'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from '../../styles/productCardSkeletonStyles'

const useStyles = makeStyles(styles)

const ProductCardSkeleton = () => {
  const classes = useStyles()
  // className={classes.product_card_skeleton}
  return (
    <Skeleton className={classes.product_card_skeleton} />
  )
}

export default ProductCardSkeleton