import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import star from '../../assets/white-star.png'
import basket from '../../assets/basket.png'
import CartContext from '../../contexts/CartContext'
import UserContext from '../../contexts/UserContext'
import styles from '../../styles/productCardStyles'

const useStyles = makeStyles(styles)

const ProductCard = ({ id, image, price, title, rating, ratingcounts, stock, product }) => {
	const classes = useStyles()
	const { addToCart } = useContext(CartContext)
	const userInfo = useContext(UserContext)

	return (
		<article className={classes.product_card}>
			<div className={classes.product_image}>
				<NavLink to={`/product/${product?._id}`}>
					<img
						className={classes.product_image_img}
						src={`http://localhost:5000/products/${product?.images[0]}`}
						alt='product image'
					/>
				</NavLink>
			</div>
			<div className={classes.product_details}>
				<h3 className={classes.product_price}>$ {product?.price}</h3>
				<p className={classes.product_title}>{product?.title}</p>

				<footer className={classes.product_info_footer}>
					<div className={classes.align_center}>
						<p className={classes.product_rating}>
							<img className={classes.product_rating_img} src={star} alt='star' /> {product?.reviews.rate}
						</p>
						<p className={classes.product_review_count}>{product?.reviews.counts}</p>
					</div>
					{product?.stock > 0 && userInfo && (
						<button className={classes.add_to_cart} onClick={() => addToCart(product, 1)}>
							<img className={classes.add_to_cart_img} src={basket} alt='basket button' />
						</button>
					)}
				</footer>
			</div>
		</article>
	)
}

export default ProductCard
