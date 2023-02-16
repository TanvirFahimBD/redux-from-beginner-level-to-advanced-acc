import { deleteProduct } from "../../actionCreators/productActions"

export const deleteProductData = (id) => {
    return async (dispatch, getData) => {
        const url = `http://localhost:5000/products/${id}`;
        const res = await fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
        const data = await res.json()
        if (data.deletedCount > 0) {
            alert('Product deleted')
            dispatch(deleteProduct(id))
        }
    }
}