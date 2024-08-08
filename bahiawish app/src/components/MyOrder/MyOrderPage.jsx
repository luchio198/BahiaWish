import { useContext } from 'react'
import { makeStyles } from '@mui/styles'
import { styled } from '@mui/material/styles'
import user from '../../assets/user.webp'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import useData from '../../hooks/useData'
import Loader from '../Common/Loader'
import UserContext from '../../contexts/UserContext'
import styles from '../../styles/myOrderPageStyles'

const useStyles = makeStyles(styles)
const headers = ['Order', 'Products', 'Total', 'Status']

const MyOrderPage = () => {
	const classes = useStyles()
	const { data: orders, error, isLoading } = useData('/order')
	const userInfo = useContext(UserContext)
	console.log('userInfo', userInfo)
	const getProductString = (order) => {
		const productStringArr = order.products.map((p) => `${p.product.title}(${p.quantity})`)
		return productStringArr.join(', ')
	}
	const StyledTableCell = styled(TableCell)(({ theme }) => ({
		[`&.${tableCellClasses.head}`]: {
			backgroundColor: theme.palette.common.black,
			color: theme.palette.common.white,
			fontSize: 16,
			fontFamily: 'Montserrat',
			minWidth: '50px',
		},
		[`&.${tableCellClasses.body}`]: {
			fontSize: 15,
			fontFamily: 'Montserrat',
			minWidth: '100px',
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

	return (
		<section className={classes.align_center + ' ' + classes.myorder_page}>
			<div className={classes.align_center + ' ' + classes.user_info}>
				<img src={userInfo ? userInfo.profilePic : user} alt='user profile' className={classes.user_info_img} />
				<div>
					<p className={classes.user_name}>{userInfo?.name}</p>
					<p className={classes.user_email}>{userInfo?.email}</p>
				</div>
			</div>
			{isLoading && <Loader />}
			{error && <em className={classes.form_error}>{error}</em>}
			{orders && (
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 700 }} aria-label='customized table'>
						<TableHead>
							<StyledTableRow>
								{headers.map((head, index) => (
									<>
										<StyledTableCell key={index} align='center'>
											{head}
										</StyledTableCell>
									</>
								))}
							</StyledTableRow>
						</TableHead>
						<TableBody>
							{orders?.map((order, index) => (
								<StyledTableRow key={order._id}>
									<StyledTableCell component='th' scope='row'>
										{index + 1}
									</StyledTableCell>
									<StyledTableCell align='center'>{getProductString(order)}</StyledTableCell>
									<StyledTableCell align='center'>$ {order.total}</StyledTableCell>
									<StyledTableCell align='center'>{order.status}</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)}
		</section>
	)
}

export default MyOrderPage
