const navbarStyles = {
	search_result: {
		position: 'absolute',
		top: '100%',
		left: '0',
		width: '100%',
		marginTop: '10px',
		border: '1px solid #cdcdcd',
		borderRadius: '5px',
		backgroundColor: '#fff',
		zIndex: '9999',
	},
	search_suggestion_link: {
		display: 'flex',
		'& a': {
			width: '100%',
			padding: '10px 20px',
			fontSize: '18px',
			cursor: 'pointer',
		},
		'& hover': {
			backgroundColor: '#e3e3e3',
		},
	},
}

export default navbarStyles
