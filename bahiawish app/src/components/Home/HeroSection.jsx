import { makeStyles } from '@mui/styles'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Grid, Link, Typography } from '@mui/material'
import '@fontsource/roboto/400.css'
import styles from '../../styles/heroSectionStyles'

const useStyles = makeStyles(styles)

const HeroSection = ({ title, subtitle, link, image }) => {
	const classes = useStyles()

	const themeTitle = createTheme({
		typography: {
			fontSize: 60,
			fontFamily: 'Montserrat',
		},
	})

	const themeSubtitle = createTheme({
		typography: {
			fontSize: 18,
			fontFamily: 'Montserrat',
		},
	})

	return (
		<Grid container direction='row' justifyContent='space-evenly' alignItems='center' className={classes.hero_section}>
			<Grid item textAlign='center'>
				<ThemeProvider theme={themeTitle}>
					<Typography mb={2} className={classes.hero_title}>
						{title}
					</Typography>
				</ThemeProvider>
				<ThemeProvider theme={themeSubtitle}>
					<Typography mb={6} className={classes.hero_subtitle}>
						{subtitle}
					</Typography>
					<Link
						to={link}
						sx={{ color: 'black', fontWeight: 500, fontFamily: 'Montserrat' }}
						className={classes.hero_link}
						underline='none'
					>
						Buy Now
					</Link>
				</ThemeProvider>
			</Grid>
			<Grid item>
				<img src={image} alt='' className={classes.hero_image} />
			</Grid>
		</Grid>
	)
}

export default HeroSection
