const signUpPageStyles = {
	signup_form: {
		width: '40%',
	},
	image_input_section: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	image_preview: {
		width: '120px',
		height: '120px',
		borderRadius: '100%',
		overflow: 'hidden',
		marginBottom: '15px',
		textAlign: 'center',
		display: 'block',
		justifyContent: 'center',
		alignItems: 'center',
	},
	image_preview_img: {
		width: '100%',
		height: '100%',
	},
	image_input: {
		display: 'none',
	},
	image_label: {
		display: 'inline-block',
		padding: '10px 20px',
		marginTop: '10px',
		marginBottom: '10px',
		textAlign: 'center',
		background: '#2196f3',
		color: '#fff',
		fontSize: '15px',
		fontFamily: 'inherit',
		textTransform: 'Uppercase',
		fontWeight: 500,
		borderRadius: '5px',
		cursor: 'pointer',
		width: 'fit-content',
	},
	signup_form_input: {
		width: '100%',
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gap: '20px',
	},
	signup_textares_section: {
		gridColumn: '1/3',
	},
	input_textarea: {
		fontSize: '17px',
		fontWeight: 500,
		fontFamily: 'inherit',
		height: '120px',
		resize: 'none',
		padding: '4px 8px',
		outline: 'none',
	},
	input: {
		display: 'none',
	},
	form_error: {
		fontSize: '16px',
		fontFamily: 'Roboto',
		color: 'red',
		marginTop: '10px',
	},
}

export default signUpPageStyles
