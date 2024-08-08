import { makeStyles } from '@mui/styles'
import styles from '../../styles/quantityInputStyles'

const useStyles = makeStyles(styles)

const QuantityInput = ({ quantity, setQuantity, stock, cartPage, productId }) => {
	const classes = useStyles()
	return (
		<>
			<div className={classes.quantity_input_container}>
				<button
					className={classes.quantity_input_button}
					disabled={quantity <= 1}
					onClick={() => {
						cartPage ? setQuantity('decrease', productId) : setQuantity(quantity - 1)
					}}
				>
					{' '}
					-{' '}
				</button>
				<p className={classes.quantity_input_count}>{quantity}</p>
				<button
					className={classes.quantity_input_button}
					disabled={quantity >= stock}
					onClick={() => {
						cartPage ? setQuantity('increase', productId) : setQuantity(quantity + 1)
					}}
				>
					{' '}
					+{' '}
				</button>
			</div>
		</>
	)
}

export default QuantityInput
