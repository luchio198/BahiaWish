import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Navigate, useLocation } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, Card, InputAdornment, TextField, Typography } from '@mui/material'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { getUser, login } from '../../services/userServices'
import styles from '../../styles/loginPageStyles'

const useStyle = makeStyles(styles)

const schema = z.object({
	email: z.string().email({ message: 'Please enter a valid email address.' }).min(3),
	password: z.string().min(8, { message: 'Password should be at least 8 characters.' }).max(20),
})

const LoginPage = () => {
	const classes = useStyle()
	const location = useLocation()

	const [formError, setFormError] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: zodResolver(schema) })

	const handleClickShowPassword = () => setShowPassword((show) => !show)

	const onSubmit = async (formData) => {
		try {
			await login(formData)

			const { state } = location
			window.location = state ? state.from : '/'
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
					marginTop: '20px',
					'& > :not(style)': {
						m: 1,
						width: 700,
						height: 500,
					},
				}}
			>
				<Card sx={{ borderRadius: '10px' }}>
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
						Login Form
					</Typography>
					<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
						<TextField
							sx={{ width: '60%' }}
							label='Email'
							variant='outlined'
							error={errors?.email && errors.email.message}
							helperText={errors?.email && errors.email.message}
							// This code will be used with react-hook-form
							{...register('email')}
							// This code will be used without react-hook-form
							// onChange={e => setUser({...user, name: e.target.value})}
							// value={user.name}
						/>
						<TextField
							sx={{ width: '60%' }}
							id='password'
							label='Password'
							variant='outlined'
							InputProps={{
								endAdornment: (
									<InputAdornment onClick={handleClickShowPassword} position='end'>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</InputAdornment>
								),
							}}
							onKeyDown={(e) => {
								if (e.key === 'Enter') {
									handleSubmit(onSubmit)()
								}
							}}
							error={errors?.password && errors.password.message}
							helperText={errors?.password && errors.password.message}
							type={showPassword ? 'text' : 'password'}
							// This code will be used with react-hook-form
							{...register('password')}
							// This code will be used without react-hook-form
							// onChange={e => setUser({...user, phone: parseInt(e.target.value)})}
							// value={user.phone}
						/>
						{formError && <em className={classes.form_error}>{formError}</em>}
						<Button variant='contained' sx={{ width: '60%' }} onClick={handleSubmit(onSubmit)}>
							Submit
						</Button>
					</Box>
				</Card>
			</Box>
		</>
	)
}

export default LoginPage
