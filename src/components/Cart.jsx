import { useSelector } from 'react-redux'
import { useContext, useRef, useEffect } from 'react'
import DataContext from '../context/DataContext'
import Tour from './Tour.jsx'

export default function Cart(){
    const ref = useRef()
    useEffect(() => {
        ref.current.scrollIntoView()
    },[])

    const cart = useSelector(state => state.cart)
    const {toursData} = useContext(DataContext)
    
    const tours = cart.map((cartItemID) => {
        const itemData = toursData.find(tour => cartItemID === tour.id)
        const {id, name, city, desc, img, bedrooms, price} = itemData
        return  <Tour
                    key={id}
                    id={id}
                    name={name}
                    city={city}
                    desc={desc}
                    img={img}
                    bedrooms={bedrooms}
                    price={price}
                />
        }
    )

    return(
        <section ref={ref} className="container section-tours">
            <h2 className="title">Your cart</h2>

            <div className="tour-panel-area">
                {
                    tours.length ? 
                    tours :
                    <h3>Your cart is empty...</h3>
                }
                
            </div>
        </section>
    )
}