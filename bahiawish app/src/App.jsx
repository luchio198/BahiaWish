import React, { useEffect, useState } from 'react'
import UserContext from './contexts/UserContext'
import { makeStyles } from '@mui/styles'
import NavBar from './components/NavBar/NavBar'
import Routing from './components/Routing/Routing'
import CartContext from './contexts/CartContext'
import { addToCartAPI, getCartAPI, removeFromCartAPI } from './services/cartServices'
import { getJwt, getUser } from './services/userServices'
import { ToastContainer, toast } from 'react-toastify'
import setAuthToken from './utils/setAuthToken'
import 'react-toastify/dist/ReactToastify.css'
import './styles/app.css'
import styles from './styles/toastifyStyles'

const useStyles = makeStyles(styles)
setAuthToken(getJwt())

const App = () => {
	const classes = useStyles()

	const [user, setUser] = useState(null)
	const [cart, setCart] = useState([])

	useEffect(() => {
		try {
			const jwtUser = getUser()
			if (Date.now() >= jwtUser.exp * 1000) {
				localStorage.removeItem('token')
				location.reload()
			} else {
				setUser(jwtUser)
			}
		} catch (error) {}
	}, [])

	const addToCart = (product, quantity) => {
		const updatedCart = [...cart]
		const productIndex = updatedCart.findIndex((item) => item.product._id === product._id)
		console.log('productIndex APP', productIndex)
		if (productIndex === -1) {
			updatedCart.push({ product, quantity })
		} else {
			updatedCart[productIndex].quantity += quantity
		}

		setCart(updatedCart)
		addToCartAPI(product._id, quantity)
			.then((res) => {
				setCart(res.data)
				toast.success('Product Added Successfully!')
			})
			.catch((err) => {
				toast.error('Failed to add product!')
				setCart(cart)
			})
	}
	const getCart = () => {
		getCartAPI()
			.then((res) => {
				setCart(res.data)
			})
			.catch((err) => {
				toast.error('Something went wrong!')
			})
	}
	const removeFromCart = (id) => {
		const oldCart = [...cart]
		const newCart = oldCart.filter((item) => item.product._id !== id)
		setCart(newCart)

		removeFromCartAPI(id).catch((err) => {
			toast.error('Something went wrong!')
			setCart(oldCart)
		})
	}
	const updateCart = (type, id) => {
		const updatedCart = [...cart]
		const productIndex = updatedCart.findIndex((item) => item.product._id === id)
		if (type === 'increase') {
			updatedCart[productIndex].quantity += 1
			setCart(updatedCart)
		}
		if (type === 'decrease') {
			updatedCart[productIndex].quantity -= 1
			setCart(updatedCart)
		}
	}

	useEffect(() => {
		if (user) {
			getCart()
		}
	}, [user])

	return (
		<>
			<UserContext.Provider value={user}>
				<CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCart, setCart }}>
					<NavBar user={user} cartCount={cart.length} />
					<main>
						<ToastContainer
							position='bottom-right'
							// theme='dark'
							// progressClassName={classes.toastify__toast__body}
							bodyClassName={classes.toastify__toast__body}
						/>
						<Routing />
					</main>
				</CartContext.Provider>
			</UserContext.Provider>
		</>
	)
}

export default App
