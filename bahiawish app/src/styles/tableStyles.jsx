const tableStyles = {
  common_table: {
    width: '100%',
    marginBottom: '16px',
    borderCollapse: 'collapse',
    backgroundColor: '#fff',
    boxShadow: '0px 3px 8px rgba(0,0,0,0.24)',
    '&:thread th': {
      height: '50px',
      backgroundColor: '#36304a',
      color: '#fff',
      textTransform: 'uppercase'
    },
    '&:tbody th': {
      height: '50px',
      textAlign: 'center'
    },
    '&:nth-child(even)': {
      backgroundColor: '#f5f5f5'
    }
  }, 
  
}

export default tableStyles