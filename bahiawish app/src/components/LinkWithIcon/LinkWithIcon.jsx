import React from 'react'
import { makeStyles } from "@mui/styles";
import styles from '../../styles/linkWithIconStyles';

const useStyles = makeStyles(styles)

const LinkWithIcon = ({title, link, emoji, sidebar}) => {
  const classes = useStyles()
  
  return (
    <a href={link} className={sidebar ? `${classes.align_center + ' ' + classes.sidebar_link}` : classes.align_center}>
      {title}
      <img src={emoji} alt="" className={classes.link_emoji}/>
    </a>
  )
}

export default LinkWithIcon