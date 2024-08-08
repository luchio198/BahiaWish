const quantityInputStyles = {
	quantity_input_container: {
		display: 'flex',
		flexDirection: 'row',
	},
	align_center: {
		display: 'flex',
		alignItems: 'center',
	},
	quantity_input_button: {
		margin: '0 5px',
		width: '35px',
		height: '35px',
		fontSize: '25px',
		backgroundColor: '#ff8848',
		color: '#fff',
		border: 'none',
		borderRadius: '100%',
		cursor: 'pointer',
		'&:disabled': {
			opacity: 0.5,
			cursor: 'default',
		},
	},
	quantity_input_count: {
		margin: '5px 5px',
		fontSize: '20px',
		fontWeight: 'bold',
		padding: '0 15px',
	},
}

export default quantityInputStyles
