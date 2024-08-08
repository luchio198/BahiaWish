import { useEffect, useState, useContext } from 'react'
import QuantityInput from '../QuantityInput/QuantityInput'
import user from '../../assets/user.webp'
import { makeStyles } from '@mui/styles'
import { styled } from '@mui/material/styles'
import { DeleteForever } from '@mui/icons-material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import CartContext from '../../contexts/CartContext'
import { Button } from '@mui/material'
import { checkoutAPI } from '../../services/orderServices'
import { toast } from 'react-toastify'
import styles from '../../styles/cartPageStyles'
import UserContext from '../../contexts/UserContext'

const useStyles = makeStyles(styles)
const headers = ['Item', 'Price', 'Quantity', 'Total', 'Remove']

const CartPage = () => {
	const classes = useStyles()
	const userInfo = useContext(UserContext)
	const { cart, removeFromCart, updateCart, setCart } = useContext(CartContext)
	console.log('cart CARTPAGE', cart)
	const [subtotal, setSubtotal] = useState(0)
	const shippingCharge = subtotal !== 0 ? 5 : 0

	useEffect(() => {
		let total = 0
		cart?.forEach((item) => {
			total += item.product.price * item.quantity
		})
		setSubtotal(total)
	}, [cart])

	const StyledTableCell = styled(TableCell)(({ theme }) => ({
		[`&.${tableCellClasses.head}`]: {
			backgroundColor: theme.palette.common.black,
			color: theme.palette.common.white,
			fontSize: 16,
			fontFamily: 'Montserrat',
		},
		[`&.${tableCellClasses.body}`]: {
			fontSize: 15,
			fontFamily: 'Montserrat',
		},
	}))

	const StyledTableRow = styled(TableRow)(({ theme }) => ({
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
		// hide last border
		'&:last-child td, &:last-child th': {
			border: 0,
		},
	}))

	const checkout = () => {
		const oldCart = [...cart]
		setCart([])
		checkoutAPI()
			.then(() => {
				toast.success('Order placed successfully!')
			})
			.catch(() => {
				toast.error('Something went wrong!')
				setCart(oldCart)
			})
	}

	return (
		<section className={classes.align_center + ' ' + classes.card_page}>
			<div className={classes.align_center + ' ' + classes.user_info}>
				<img src={userInfo ? userInfo.profilePic : user} alt='user profile' className={classes.user_info_img} />
				<div>
					<p className={classes.user_name}>{userInfo.name}</p>
					<p className={classes.user_email}>{userInfo.email}</p>
				</div>
			</div>
			{/* Card Table */}
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 700 }} aria-label='customized table'>
					<TableHead>
						<StyledTableRow>
							{headers.map((head) => (
								<>
									<StyledTableCell key={head[0]} align='center'>
										{head}
									</StyledTableCell>
								</>
							))}
						</StyledTableRow>
					</TableHead>
					<TableBody>
						{cart &&
							cart?.map(({ product, quantity }) => (
								<StyledTableRow key={product._id}>
									<StyledTableCell component='th' scope='row'>
										{product.title}
									</StyledTableCell>
									<StyledTableCell align='center'>$ {product.price.toFixed(2)}</StyledTableCell>
									<StyledTableCell align='center'>
										<QuantityInput
											quantity={quantity}
											setQuantity={updateCart}
											stock={product.stock}
											cartPage={true}
											productId={product._id}
										/>
									</StyledTableCell>
									<StyledTableCell align='center'>$ {product.price * quantity}</StyledTableCell>
									<StyledTableCell align='center'>
										<DeleteForever
											className={classes.removeIcon}
											align='center'
											key={4}
											onClick={() => removeFromCart(product._id)}
										/>
									</StyledTableCell>
								</StyledTableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
			<table className={classes.card_bill}>
				<tbody>
					<tr>
						<td className={classes.card_bill_td}>Subtotal</td>
						<td className={classes.card_bill_td}>$ {subtotal}</td>
					</tr>
					<tr>
						<td className={classes.card_bill_td}>Shipping Charge</td>
						<td className={classes.card_bill_td}>$ {shippingCharge}</td>
					</tr>
					<tr className={classes.card_bill_final}>
						<td className={classes.card_bill_td}>Total</td>
						<td className={classes.card_bill_td}>$ {subtotal + shippingCharge}</td>
					</tr>
				</tbody>
			</table>
			<Button
				className={classes.search_button + ' ' + classes.checkout_button}
				variant='contained'
				sx={{ marginTop: '10px' }}
				onClick={checkout}
				disabled={cart <= 0}
			>
				Checkout
			</Button>
			{/* <button className={classes.search_button + ' ' + classes.checkout_button}>Checkout</button> */}
		</section>
	)
}

export default CartPage
