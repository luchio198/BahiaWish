import apiClient from '../utils/api-client'

export function addToCartAPI(id, quantity) {
	return apiClient.post(`/cart/${id}`, { quantity })
}

export async function getCartAPI() {
	return await apiClient.get('/cart')
}

export function removeFromCartAPI(id) {
	return apiClient.patch(`/cart/remove/${id}`)
}
