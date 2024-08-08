import React from 'react'
import { makeStyles } from '@mui/styles';

import styles from '../../styles/paginationStyles'

const useStyles = makeStyles(styles)

const Pagination = ({totalPosts, postsPerPage, onClick, currentPage}) => {
  const classes = useStyles()
  let pages = []
  
  for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
    pages.push(i)
  }
  
  return (
    <>
      {pages.length > 1 && <ul className={classes.pagination}>
        {pages.map((page) => (
          <li key={page}>
            <button className={classes.pagination_button} onClick={() => onClick(page)}>{page}</button>
          </li>
        ))}
      </ul>}
    </>
  )
}

export default Pagination