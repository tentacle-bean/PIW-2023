import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import { addToCart, removeFromCart } from '../store'

// eslint-disable-next-line react/prop-types
export default function Tour({id, name, city, desc, img, bedrooms, price}){
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)

    const handleAdd = () => {
        dispatch(addToCart(id))
    }

    const handleRemove = () => {
        dispatch(removeFromCart(id))
    }

    const cartBtn = !cart.includes(id) ?
        <button className="cart-btn btn btn-blue" onClick={handleAdd}>Add to cart</button>
    :
        <button className="cart-btn btn btn-blue" onClick={handleRemove}>Remove from cart</button>
    
    return(
        <>
            <div className="tour-panel">
                <h3 className="subtitle tour-name">{`${name}, ${city}`}</h3>
                <p className="paragraph tour-desc">{desc}</p>
                <img className="tour-img" src={img} alt={`Photo of ${name}`}></img>
                <div className="tour-bedrooms">
                    <p className="paragraph tour-bedrooms"><i className="fa-solid fa-bed"></i> {bedrooms} bedrooms</p>
                </div>
                <p className="paragraph accent tour-price">{price}</p>

                {cartBtn}
                <Link className="book-btn" to={`/tour/${id}`}>
                    <button className="btn btn-blue">Book a meeting</button>
                </Link> 
                
            </div>
        </>
    )
}