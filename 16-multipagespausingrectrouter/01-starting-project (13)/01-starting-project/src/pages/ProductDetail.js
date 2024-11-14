
import {useParams} from 'react-router-dom'
export default function ProductDetail () {
    
    //we can extract the params from te url
    const params=  useParams()

    return <>

        <h1>Product Details</h1>
        <p>{params.productId}</p>

    </>

}






