import useData from '../../hooks/useData'
import { makeStyles } from '@mui/styles'
import ProductCard from '../ProductCard/ProductCard'
import ProductCardSkeleton from '../ProductCard/ProductCardSkeleton'
import styles from '../../styles/featuredProductsStyles'

const useStyles = makeStyles(styles)

const FeaturedProducts = () => {
	const classes = useStyles()

	const { data, error, isLoading } = useData('/products/featured')
	const skeletons = [1, 2, 3]

	return (
		<section className={classes.featured_products}>
			<h2 className={classes.featured_products_h2}>Featured Products</h2>
			<div className={classes.featured_products_list + ' ' + classes.align_center}>
				{error && <em className='form_error'>{error}</em>}
				{isLoading
					? skeletons.map((n) => <ProductCardSkeleton key={n} />)
					: data && data?.map((product) => <ProductCard key={product._id} product={product} />)}
			</div>
		</section>
	)
}

export default FeaturedProducts
