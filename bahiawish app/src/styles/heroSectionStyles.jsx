const heroSectionStyles = {
	hero_section: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		height: '550px',
		padding: '0 60px',
		backgroundColor: '#000',
		color: '#fff',
	},
	hero_section_center: {
		justifyContent: 'center',
		flexDirection: 'column',
		textAlign: 'center',
	},
	hero_title: {
		fontSize: '45px',
		fontWeight: '700',
		textAlign: 'center',
		marginBottom: '15px',
	},
	hero_subtitle: {
		fontSize: '60px',
		// marginBottom: '32px',
		// margin: '30px',
	},
	hero_link: {
		padding: '16px 32px',
		textTransform: 'uppercase',
		letterSpacing: '1.5px',
		fontWeight: '700',
		fontFamily: 'Montserrat',
		border: '2px solid #fff',
		borderRadius: '50px',
		backgroundColor: '#fff',
		color: '#000',
		transition: 'all 300ms linear',

		'&:hover': {
			backgroundColor: '#000',
			color: '#fff',
			fontWeight: '500',
		},
	},
	hero_image: {
		height: '400px',
		transition: 'all 150ms linear',
		'&:hover': {
			scale: '1.05',
		},
	},
	align_center: {
		display: 'flex',
		alignItems: 'center',
	},
}

export default heroSectionStyles
