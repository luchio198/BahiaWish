const paginationStyles = {
  pagination: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '16px'
  },
  pagination_button: {
    width: '40px',
    height: '40px',
    margin: '0 10px',
    fontSize: '16px',
    fontWeight: 600,
    border: '1px solid #e5e5e5',
    borderRadius: '6px',
    backgroundColor: '#fff',
    color: '#000',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    '&:focus': {
      fontWeight: '700',
      border: '2px solid #fff',
      backgroundColor: '#e0e0e0',
    }
  },
  
}

export default paginationStyles