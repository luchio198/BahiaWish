const loginPageStyles = {
	box_style: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		'& > :not(style)': {
			m: 1,
			width: 700,
			height: 500,
		},
		border: '1px solid green',
	},
	card_style: {
		borderRadius: '10px',
		border: '1px solid blue',
	},
	typography_style: {
		display: 'flex',
		justifyContent: 'center',
		fontFamily: 'Montserrat',
		fontSize: 30,
		fontWeight: 600,
		margin: '30px 0 30px',
	},
	inner_box_style: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: 4,
	},
	textfield_style: {
		width: '60%',
	},
	form_error: {
		fontSize: '16px',
		fontFamily: 'Roboto',
		color: 'red',
	},
}

export default loginPageStyles
