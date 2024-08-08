import { makeStyles } from '@mui/styles'
import LinkWithIcon from '../LinkWithIcon/LinkWithIcon'
import useData from '../../hooks/useData'
import styles from '../../styles/productsSidebarStyles'

const useStyles = makeStyles(styles)

const ProductsSidebar = () => {
	const classes = useStyles()

	const { data: categories, error } = useData('/category')

	return (
		<aside className={classes.products_sidebar}>
			<h2 className={classes.products_sidebar_h2}>Category</h2>
			<div className={classes.category_links}>
				{error && <em className='form_error'>{error}</em>}
				{categories &&
					categories.map((category) => (
						<LinkWithIcon
							key={category._id}
							title={category.name}
							link={`/products?category=${category.name}`}
							emoji={`http://localhost:5000/category/${category.image}`}
							sidebar
						/>
					))}
			</div>
		</aside>
	)
}

export default ProductsSidebar
