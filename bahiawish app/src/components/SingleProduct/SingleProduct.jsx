import { useContext, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import CartContext from '../../contexts/CartContext'
import { makeStyles } from '@mui/styles'
import { Button } from '@mui/material'
import { ArrowBackIos } from '@mui/icons-material'
import useData from '../../hooks/useData'
import QuantityInput from '../QuantityInput/QuantityInput'
import Loader from '../Common/Loader'
import UserContext from '../../contexts/UserContext'
import styles from '../../styles/singleProductStyles'

const useStyles = makeStyles(styles)

const SingleProduct = () => {
	const classes = useStyles()

	const { addToCart } = useContext(CartContext)
	const userInfo = useContext(UserContext)
	const navigate = useNavigate()

	const [quantity, setQuantity] = useState(1)
	const [selectedImage, SetSelectedImage] = useState(0)

	const { id } = useParams()

	const { data: product, error, isLoading } = useData(`/products/${id}`)

	return (
		<section className={classes.single_product}>
			{error && <em className={classes.form_error}>{error}</em>}
			{isLoading && <Loader />}
			{product && (
				<>
					<div className={classes.align_center}>
						<div className={classes.single_products_thumbnails}>
							<Button
								sx={{
									backgroundColor: 'white',
									color: 'black',
									marginBottom: '50px',
									'&:hover': { backgroundColor: 'white' },
								}}
								variant='contained'
								startIcon={<ArrowBackIos />}
								onClick={() => navigate(-1)}
							>
								Back
							</Button>
							{product.images.map((image, index) => (
								<img
									className={
										selectedImage === index
											? classes.single_products_thumbnails_img + '  ' + classes.selected_image
											: classes.single_products_thumbnails_img
									}
									key={index}
									src={`http://localhost:5000/products/${image}`}
									alt={product.title}
									onClick={() => SetSelectedImage(index)}
								/>
							))}
						</div>
						<img
							src={`http://localhost:5000/products/${product.images[selectedImage]}`}
							alt={product.title}
							className={classes.single_product_display}
						/>
					</div>
					<div className={classes.single_product_details}>
						<h1 className={classes.single_product_title}>{product.title}</h1>
						<p className={classes.single_product_description}>{product.description}</p>
						<p className={classes.single_product_price}>${product.price.toFixed(2)}</p>

						{userInfo && (
							<>
								<h2 className={classes.quantity_title}>Quantity:</h2>
								<QuantityInput quantity={quantity} setQuantity={setQuantity} stock={product.stock} alignStart />
								<Button variant='contained' sx={{ marginTop: '10px' }} onClick={() => addToCart(product, quantity)}>
									Add to Cart
								</Button>
							</>
						)}
					</div>
				</>
			)}
		</section>
	)
}

export default SingleProduct
