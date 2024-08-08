const toastifyStyles = {
	toastify__toast_error: {
		border: '1px solid #EB5757',
		borderRadius: '50px !important',
		background: '#FAE1E2 !important',
		'&:after': {
			// content: url('../assets/images/svg/closeToast.svg'), // Your svg Path
			content: '../assets/images/svg/closeToast.svg', // Your svg Path
			position: 'absolute',
			color: '#333333',
			fontSize: '15px',
			fontWeight: 700,
			left: '265px',
			paddingTop: '14px !important',
		},
		'&:before': {
			// content: url('../assets/images/svg/errorToast.svg'), // Your svg Path
			content: '../assets/images/svg/errorToast.svg', // Your svg Path
			position: 'relative',
			zIndex: 100000,
			left: '12px',
			top: '6px',
		},
	},
	toastify__toast__success: {
		border: '1px solid #3A9EA5 !important',
		borderRadius: '50px !important',
		background: '#F0F9FA !important',
		'&:after': {
			// content: url('../assets/images/svg/closeToast.svg'), // Your svg Path
			content: '../assets/images/svg/closeToast.svg', // Your svg Path
			position: 'absolute',
			color: '#333333',
			fontSize: '15px',
			fontWeight: 700,
			left: '265px',
			paddingTop: '14px !important',
		},
		'&:before': {
			// content: url('../assets/images/svg/successToast.svg'), // Your svg Path
			content: '../assets/images/svg/successToast.svg', // Your svg Path
			position: 'relative',
			zIndex: 100000,
			left: '12px',
			top: '6px',
		},
	},
	toastify__toast__warning: {
		border: '1px solid #E78326 !important',
		borderRadius: '50px !important',
		background: '#FADFC5 !important',
		'&:after': {
			// content: url('../assets/images/svg/closeToast.svg'), // Your svg Path
			content: '../assets/images/svg/closeToast.svg', // Your svg Path
			position: 'absolute',
			color: '#E78326',
			fontSize: '15px',
			fontWeight: 700,
			left: '265px',
			paddingTop: '14px !important',
		},
		'&:before': {
			content: '../assets/images/svg/warnToast.svg', // Your svg Path
			position: 'relative',
			zIndex: 100000,
			left: '12px',
			top: '6px',
		},
	},
	toastify__toast__body: {
		color: 'fff',
		fontSize: '16px',
		// paddingLeft: '20px',
		lineHeight: '20px',
		// padding: '5px',
		// paddingTop: '25px',
		width: '100%',
		fontWeight: 400,
		// marginLeft: '25px !important',
	},
	toastify__toast__button: {
		display: 'none',
	},
	// .Toastify__toast > button>  svg {
	//     display: none;
	// }
}

export default toastifyStyles
