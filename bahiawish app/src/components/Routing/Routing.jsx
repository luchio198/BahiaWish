import { Routes, Route } from 'react-router-dom'
import HomePage from '../Home/HomePage'
import ProductsPage from '../ProductsPage/ProductsPage'
import SingleProduct from '../SingleProduct/SingleProduct'
import CartPage from '../Cart/CartPage'
import MyOrderPage from '../MyOrder/MyOrderPage'
import LoginPage from '../Authentication/LoginPage'
import SignupPage from '../Authentication/SignupPage'
import Logout from '../Authentication/Logout'
import ProtectedRoute from './ProtectedRoute'
import NotFound from '../NotFound/NotFound'

const Routing = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/products' element={<ProductsPage />} />
			<Route path='/product/:id' element={<SingleProduct />} />
			<Route path='/signup' element={<SignupPage />} />
			<Route path='/login' element={<LoginPage />} />
			<Route element={<ProtectedRoute />}>
				<Route path='/cart' element={<CartPage />} />
				<Route path='/myorders' element={<MyOrderPage />} />
				<Route path='/logout' element={<Logout />} />
			</Route>
			<Route path='/*' element={<NotFound />} />
		</Routes>
	)
}

export default Routing
