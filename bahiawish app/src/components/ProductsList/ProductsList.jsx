import { makeStyles } from '@mui/styles'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import useData from '../../hooks/useData'
import ProductCard from './../ProductCard/ProductCard'
import ProductCardSkeleton from '../ProductCard/ProductCardSkeleton'
import styles from '../../styles/productsListStyles'

const useStyles = makeStyles(styles)

const ProductsList = () => {
	const classes = useStyles()

	const [page, setPage] = useState(1)
	const [search, setSearch] = useSearchParams()
	const category = search.get('category')
	const searchQuery = search.get('search')

	const { data, error, isLoading } = useData(
		'/products',
		{
			params: {
				search: searchQuery,
				category,
				perPage: 10,
				page,
			},
		},
		[searchQuery, category, page],
	)
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]

	const handlePageChange = (page) => {
		const currentParams = Object.fromEntries([...search])
		setSearch({ ...currentParams, page: parseInt(currentParams.page) + 1 })
	}

	useEffect(() => {
		const handleScroll = () => {
			const { scrollTop, clientHeight, scrollHeight } = document.documentElement
			if (scrollTop + clientHeight >= scrollHeight - 1 && !isLoading && data && page < data.totalPages) {
				setPage((prev) => prev + 1)
			}
		}
		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [data, isLoading])

	useEffect(() => {
		setPage(1)
	}, [searchQuery, category])

	return (
		<section className={classes.products_list_section}>
			<header className={classes.products_list_header}>
				<h2 className={classes.products_list_header_h2}>Products</h2>
				<select name='sort' id='' className={classes.products_sorting}>
					<option value=''>Relevance</option>
					<option value=''>Price HIGH to LOW</option>
					<option value=''>Price LOW to HIGH</option>
					<option value=''>Rate HIGH to LOW</option>
					<option value=''>Rate LOW to HIGH</option>
				</select>
			</header>

			<div className={classes.products_list}>
				{error && <em className='form_error'>{error}</em>}
				{isLoading
					? skeletons.map((n) => <ProductCardSkeleton key={n} />)
					: data?.products && data?.products.map((product) => <ProductCard key={product._id} product={product} />)}
			</div>
			{/* {data && <Pagination totalPosts={data?.totalProducts} postsPerPage={8} currentPage={page} onClick={handlePageChange} />} */}
		</section>
	)
}

export default ProductsList
