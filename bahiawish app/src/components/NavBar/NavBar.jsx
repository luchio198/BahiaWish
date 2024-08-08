import { useContext, useEffect, useState } from 'react'
import { styled, alpha } from '@mui/material/styles'
import { Divider, createTheme, makeStyles } from '@material-ui/core'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import NavBarIcon from './NavBarIcon'
import { Stack } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import UserContext from '../../contexts/UserContext'
import CartContext from '../../contexts/CartContext'
import { useNavigate, Link, NavLink } from 'react-router-dom'
import { getSuggestionsAPI } from '../../services/productServices'
import { ThemeProvider } from '@mui/styles'
import styles from '../../styles/navBarIconsStyles'

const useStyles = makeStyles(styles)

const NavBar = ({ cartCount }) => {
	console.log('cartCount AFTER', cartCount)
	const classes = useStyles()

	const [search, setSearch] = useState('')
	const [suggestions, setSuggestions] = useState([])
	const [selectedItem, setSelectedItem] = useState(-1)
	const [newCartCount, setNewCartCount] = useState(cartCount)

	const navigate = useNavigate()
	const user = useContext(UserContext)
	const { cart } = useContext(CartContext)
	console.log('cart NAVBAR', cart)
	const Search = styled('div')(({ theme }) => ({
		position: 'relative',
		border: '1px solid lightgray',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(10),
			width: '20%',
		},
	}))
	const SearchIconWrapper = styled('div')(({ theme }) => ({
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}))
	const StyledInputBase = styled(InputBase)(({ theme }) => ({
		color: 'inherit',
		width: '100%',
		'& .MuiInputBase-input': {
			padding: theme.spacing(1, 1, 1, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: `calc(1em + ${theme.spacing(4)})`,
			transition: theme.transitions.create('width'),
			'&:focus': {
				border: '1px solid #42a5f5',
			},
		},
	}))
	const theme = createTheme({
		typography: {
			fontFamily: 'Montserrat',
			// fontSize: 20,
			// fontWeight: 900,
			// fontWeight: 'bold',
			// lineHeight: 1.5,
			// letterSpacing: 0.32,
			// useNextVariants: true,
			// suppressDeprecationWarnings: true,
			// h6: {
			// 	fontWeight: 900,
			// },
		},
	})
	const handleSubmit = () => {
		if (search.trim() !== '') {
			navigate(`/products?search=${search.trim()}`)
		}
		setSuggestions([])
	}
	useEffect(() => {
		if (search.trim() !== '') {
			// || search === suggestioons.map(sugestiion.title)... para que se elimine la suggestion una vez que aparezca en la barra de busqueda
			getSuggestionsAPI(search)
				.then((res) => setSuggestions(res.data))
				.catch((err) => console.log(err))
		} else {
			setSuggestions([])
		}
	}, [search])

	useEffect(() => {
		setNewCartCount(cartCount)
	}, [cart])

	const handleKeyDown = (e) => {
		if (e.key === 'ArrowDown') {
			setSelectedItem((current) => current + 1)
		} else if (e.key === 'ArrowUp') {
			setSelectedItem((current) => current - 1)
		} else if (e.key === 'Enter' && selectedItem > -1) {
			const suggestion = setSuggestions[selectedItem]
			navigate(`/products?search=${suggestion.title}`)
			setSearch('')
			setSuggestions([])
		}
	}
	console.log('newCartCount', newCartCount)
	return (
		<Box sx={{ justifyContent: 'space-around', color: '#000' }}>
			<AppBar position='static' color='inherit'>
				<Toolbar>
					<IconButton size='large' edge='start' color='inherit' aria-label='open drawer' sx={{ mr: 2 }}>
						<MenuIcon />
					</IconButton>
					<ThemeProvider theme={theme}>
						<Typography
							// variant='h4'
							noWrap
							component='div'
							sx={{
								display: { xs: 'none', sm: 'block' },
								marginRight: '0px',
								fontSize: '40px',
								fontFamily: 'Montserrat',
							}}
						>
							<Link sx={{ color: 'black', textDecoration: 'none', boxShadow: 'none' }} underline='none' href='/'>
								BahiaWish
							</Link>
						</Typography>
					</ThemeProvider>
					<Search size='large' sx={{ position: 'relative' }}>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							autoFocus
							placeholder='Search...'
							inputProps={{ 'aria-label': 'search' }}
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							onKeyDown={handleKeyDown}
							// onKeyDown={(e) => {
							// 	if (e.key === 'Enter') {
							// 		handleSubmit()
							// 	}
							// }}
						/>
						{suggestions.length > 0 && (
							<ul className={classes.search_result}>
								{suggestions &&
									suggestions?.map((suggestion) => (
										<li className={classes.search_suggestion_link} key={suggestion._id}>
											<Link
												to={`/products?search=${suggestion.title}`}
												sx={{ color: '#000', textDecoration: 'none' }}
												onClick={() => {
													setSearch('')
													setSuggestions([])
												}}
											>
												{suggestion.title}
											</Link>
										</li>
									))}
							</ul>
						)}
					</Search>
					<Stack direction='row' spacing={6} className={classes.margin}>
						<NavBarIcon title='Home' link='/' />
						<Divider variant='middle' orientation='vertical' flexItem />
						<NavBarIcon title='Products' link='/products' />
						<Divider variant='middle' orientation='vertical' flexItem />
						{!user && (
							<>
								<NavBarIcon title='LogIn' link='/login' />
								<Divider variant='middle' orientation='vertical' flexItem />
								<NavBarIcon title='SignUp' link='/signup' />
							</>
						)}
						{user && (
							<>
								<NavBarIcon title='My Orders' link='/myorders' />
								<Divider variant='middle' orientation='vertical' flexItem />
								{/* <NavBarIcon
									title='Cart'
									link='/cart'
									emoji={<p className={classes.align_center + ' ' + classes.cart_counts}>{cartCount}</p>}
								/> */}
								<NavLink title='Cart' to='/cart'>
									Cart <p className={classes.align_center + ' ' + classes.cart_counts}>{newCartCount}</p>
								</NavLink>
								<Divider variant='middle' orientation='vertical' flexItem />
								<NavBarIcon title='LogOut' link='/logout' />
							</>
						)}
					</Stack>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default NavBar
