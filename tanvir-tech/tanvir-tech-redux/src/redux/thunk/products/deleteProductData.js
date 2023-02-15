import { deleteProduct } from "../../actionCreators/productActions"

export const deleteProductData = (id) => {
    return async (dispatch, getData) => {
        const url = `http://localhost:5000/products/${id}`;
        console.log('url del', url)
        const res = await fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
        const data = await res.json()
        console.log('del data', data)
        if (data.deletedCount > 0) {
            console.log(data)
            alert('Product deleted')
            dispatch(deleteProduct(id))
        }
    }
}