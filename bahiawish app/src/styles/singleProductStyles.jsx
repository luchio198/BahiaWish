const singleProductStyles = {
	align_center: {
		display: 'flex',
		alignItems: 'center',
	},
	single_product: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '72px 48px',
	},
	single_products_thumbnails: {
		height: '600px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evently',
		flexWrap: 'wrap',
		gap: '24px',
		padding: '8px',
	},
	single_products_thumbnails_img: {
		width: '80px',
		height: '80px',
		objectFit: 'cover',
		borderRadius: '5px',
		cursor: 'pointer',
		transition: 'all 0.3s easy-in-out',
	},
	single_product_display: {
		width: '600px',
		height: '600px',
		objectFit: 'cover',
		borderRadius: '10px',
		margin: '16px',
	},
	selected_image: {
		transform: 'scale(1.12)',
	},
	single_product_details: {
		width: '35%',
		padding: '16px 24px',
	},
	single_product_title: {
		marginBottom: '16px',
		fontSize: '32px',
	},
	single_product_description: {
		marginBottom: '16px',
		lineHeight: '1.4',
		fontSize: '24px',
	},
	single_product_price: {
		marginBottom: '16px',
		fontSize: '24px',
		fontWeight: 600,
	},
	quantity_title: {
		fontSize: '20px',
		fontWeight: 700,
		marginBottom: '3px',
	},
	add_cart: {
		width: 'fit-content',
		padding: '8px 18px',
	},
	back_button: {
		backgroundColor: 'white',
		color: 'black',
		marginBottom: '50px',
		'&:hover': { backgroundColor: 'white' },
	},
}

export default singleProductStyles
