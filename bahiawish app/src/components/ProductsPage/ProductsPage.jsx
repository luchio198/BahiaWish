import React from 'react'
import { makeStyles } from "@mui/styles";
import styles from "../../styles/productsPageStyles";
import ProductsSidebar from './ProductsSidebar';
import ProductsList from '../ProductsList/ProductsList';

const useStyles = makeStyles(styles)

const ProductsPage = () => {
  const classes = useStyles()
  
  return (
    <section className={classes.products_page}>
      <ProductsSidebar />
      <ProductsList />
    </section>  
  )
}

export default ProductsPage