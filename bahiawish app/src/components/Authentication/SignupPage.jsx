import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, Card, InputAdornment, TextField, Typography } from '@mui/material'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import user from '../../assets/user.webp'
import { getUser, signup } from '../../services/userServices'
import styles from '../../styles/signUpPageStyles'

const useStyles = makeStyles(styles)

const schema = z
	.object({
		name: z.string().min(3, { message: 'Name should be at least 3 characters.' }),
		email: z.string().email({ message: 'Please enter valid email address' }).min(3),
		password: z.string().min(8, { message: 'Password must be at least 8 characters.' }).max(20),
		confirmPassword: z.string(),
		deliveryAddress: z.string().min(15, { message: 'Address must be at least 15 characters.' }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Confirm Password does not match Password',
		path: ['confirmPassword'],
	})

const SignupPage = () => {
	const classes = useStyles()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: zodResolver(schema) })

	const [profilePic, setProfilePic] = useState(null)
	const [formError, setFormError] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)

	const handleClickShowPassword = () => setShowPassword((show) => !show)

	const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show)

	const onSubmit = async (formData) => {
		try {
			await signup(formData, profilePic)
			window.location = '/'
		} catch (err) {
			if (err.response && err.response.status === 400) {
				setFormError(err.response.data.message)
			}
		}
	}
	if (getUser()) {
		return <Navigate to='/' />
	}
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: '20px',
					'& > :not(style)': {
						m: 1,
						width: 700,
						height: 770,
					},
				}}
			>
				<Card
					sx={{
						borderRadius: '10px',
						paddingRight: '35px',
						paddingLeft: '35px',
					}}
				>
					<Typography
						sx={{
							display: 'flex',
							justifyContent: 'center',
							fontFamily: 'Montserrat',
							fontSize: 30,
							fontWeight: 600,
							margin: '30px 0 30px',
						}}
					>
						SignUp Form
					</Typography>
					<Box className={classes.image_input_section}>
						<Box className={classes.image_preview}>
							<img
								className={classes.image_preview_img}
								src={profilePic ? URL.createObjectURL(profilePic) : user}
								alt='file-ip-1-preview'
							/>
						</Box>
						<input
							accept='image/*'
							className={classes.input}
							id='contained-button-file'
							type='file'
							onChange={(e) => setProfilePic(e.target.files[0])}
						/>
						<label htmlFor='contained-button-file'>
							<Button className={classes.image_label} variant='contained' component='span' color='primary'>
								Upload Image
							</Button>
						</label>
					</Box>
					<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2, marginTop: '25px' }}>
						<TextField
							sx={{ width: '60%' }}
							id='name'
							label='Name'
							variant='outlined'
							error={errors?.name && errors.name.message}
							helperText={errors?.name && errors.name.message}
							{...register('name')}
						/>
						<TextField
							sx={{ width: '60%' }}
							id='email'
							label='Email'
							variant='outlined'
							error={errors?.email && errors.email.message}
							helperText={errors?.email && errors.email.message}
							type='text'
							{...register('email')}
						/>
					</Box>
					<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2, marginTop: '15px' }}>
						<TextField
							sx={{ width: '60%' }}
							label='Password'
							variant='outlined'
							placeholder='Enter your password'
							InputProps={{
								endAdornment: (
									<InputAdornment onClick={handleClickShowPassword} position='end'>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</InputAdornment>
								),
							}}
							error={errors?.password && errors.password.message}
							helperText={errors?.password && errors.password.message}
							type={showPassword ? 'text' : 'password'}
							{...register('password')}
						/>
						<TextField
							sx={{ width: '60%' }}
							id='confirmPassword'
							label='Confirm Password'
							variant='outlined'
							placeholder='Enter confirm your password'
							InputProps={{
								endAdornment: (
									<InputAdornment onClick={handleClickShowConfirmPassword} position='end'>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</InputAdornment>
								),
							}}
							error={errors?.confirmPassword && errors.confirmPassword.message}
							helperText={errors?.confirmPassword && errors.confirmPassword.message}
							type={showConfirmPassword ? 'text' : 'password'}
							{...register('confirmPassword')}
						/>
					</Box>
					<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 2, marginTop: '15px' }}>
						<TextField
							id='deliveryAddress'
							sx={{ width: '100%' }}
							label='Delivery Address'
							placeholder='Enter delivery address'
							multiline
							rows={4}
							error={errors?.deliveryAddress && errors.deliveryAddress.message}
							helperText={errors?.deliveryAddress && errors.deliveryAddress.message}
							type='text'
							{...register('deliveryAddress')}
						/>
					</Box>
					{formError && <em className={classes.form_error}>{formError}</em>}
					<Button variant='contained' fullWidth sx={{ marginTop: '20px' }} onClick={handleSubmit(onSubmit)}>
						Submit
					</Button>
				</Card>
			</Box>
		</>
	)
}

export default SignupPage
