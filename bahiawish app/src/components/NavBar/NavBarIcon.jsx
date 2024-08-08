import React from 'react'
import { makeStyles } from '@mui/styles'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import styles from '../../styles/navLinkStyles'

const useStyles = makeStyles(styles)

const NavBarIcon = ({ title, link, emoji }) => {
	const classes = useStyles()

	return (
		<NavLink to={link} className={classes.navLinkSize}>
			{title} {emoji}
		</NavLink>
	)
}

export default NavBarIcon
