const cartPageStyles = {
	align_center: {
		display: 'flex',
		alignItems: 'center',
	},
	card_page: {
		display: 'flex',
		flexDirection: 'column',
		width: '60%',
		margin: '0 auto',
		padding: '32px 48px',
	},
	user_info: {
		gap: '16px',
		marginBottom: '32px',
	},
	user_info_img: {
		width: '80px',
		height: '80px',
		objectFit: 'cover',
		borderRadius: '100%',
	},
	user_name: {
		fontSize: '20px',
		fontWeight: 600,
	},
	card_bill: {
		alignSelf: 'flex-end',
		width: '400px',
		borderCollapse: 'collapse',
		fontSize: '16px',
		marginTop: '16px',
		backgroundColor: '#fff',
	},
	card_bill_td: {
		padding: '12px 20px',
		border: '3px solid #e5e5e5',
		'&:last-child': {
			textAlign: 'end',
			width: '150px',
		},
	},
	card_bill_final: {
		fontSize: '15px',
		fontWeight: 700,
	},
	checkout_button: {
		alignSelf: 'flex-end',
		height: '38px !important',
		margin: '16px 0',
		padding: '0 16px !important',
	},
	removeIcon: {
		color: '#9DA8B7',
		'&:hover': {
			cursor: 'pointer',
			transform: 'scale(1.01)',
			color: '#0059B2',
		},
	},
}

export default cartPageStyles
