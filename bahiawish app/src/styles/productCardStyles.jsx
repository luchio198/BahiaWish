const productCardStyles = {
  align_center: {
    display: 'flex',
    alignItems: 'center'
  },
  product_card: {
    width: '275px',
    height: '330px',
    margin: '20px',
    borderRadius: '12px',
    boxShadow: 'rgba(0,0,0,0.24) 0px 3px 8px',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  product_image: {
    height: '200px',
    textAlign: 'center',
    borderBottom: '1px solid #e5e5e5'
  },
  product_image_img: {
    height: '100%',
  },
  product_details: {
    padding: '10px 20px',
  },
  product_price: {
    fontSize: '21px',
    fontWeight: 700,
  },
  product_title: {
    fontSize: '18px',
    marginTop: '4px'
  },
  product_info_footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '10px 0'
  },
  product_rating: {
    height: '30px',
    textItems: 'center',
    padding: '0 8px',
    paddingTop: '2px',
    fontSize: '22px',
    fontWeight: 500,
    borderRadius: '5px',
    backgroundColor: '#fca311',
    color: '#fff',
  },
  product_rating_img: {
    width: '20px',
    marginRight: '5px'
  },
  product_review_count: {
    fontSize: '16px',
    marginLeft: '10px',
    color: 'grey',
    padding: '0 10px',
    borderLeft: '2px solid #dcdcdc'
  },
  add_to_cart: {
    width: '40px',
    height: '40px',
    border: 'none',
    borderRadius: '100%',
    background: 'transparent',
    cursor: 'pointer'
  },
  add_to_cart_img: {
     width: '100%',
     height: '100%'
  }
}

export default productCardStyles