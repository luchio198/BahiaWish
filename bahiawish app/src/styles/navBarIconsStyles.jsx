const navBarIconsStyles = {
	link_emoji: {
		backgroundColor: '#f2f2f2',
		border: '4px solid green',
		edge: 'end',
		justifyContent: 'flex-end',
	},
	justify: {
		justifyContent: 'flex-end',
	},
	margin: {
		marginLeft: '60px',
	},
	align_center: {
		display: 'flex',
		alignItems: 'center',
	},
	cart_counts: {
		justifyContent: 'center',
		width: '20px',
		height: '20px',
		borderRadius: '100%',
		backgroundColor: '#6457f9',
		color: '#fff',
		fontSize: '15px',
		marginLeft: '5px',
	},
	// NavBar suggestions styles
	search_result: {
		position: 'absolute',
		top: '100%',
		left: '0',
		width: '100%',
		marginTop: '5px',
		border: '1px solid #cdcdcd',
		borderRadius: '5px',
		backgroundColor: '#fff',
		zIndex: '9999',
	},
	search_suggestion_link: {
		display: 'flex',
		fontSize: '18px',
		padding: '5px',
		'&:a': {
			width: '100%',
			padding: '10px 20px',
			cursor: 'pointer',
		},
		'&:hover': {
			backgroundColor: '#e3e3e3',
		},
		'&:active': {
			backgroundColor: '#e3e3e3',
		},
	},
}

export default navBarIconsStyles
