import { useContext, useState, useRef, useEffect } from 'react'
import {Link} from 'react-router-dom'
import DataContext from '../context/DataContext'

export default function AddNew(){
    const {addTour} = useContext(DataContext)

    const ref = useRef(null)

    useEffect(() => {
        ref.current.scrollIntoView()
    },[])

    const [propertyData, setPropertyData] = useState({name: "", city: "", bedrooms: "", price: "", desc: ""})

    const handleChange = event => {
        const category = event.target.getAttribute("data-type")
        let value = event.target.value
        if(category === "price"){
            value = '$' + value
        }

        setPropertyData(propertyData => ({...propertyData, [category]: value}))
    } 

    const handleSubmit = () => {
        addTour({...propertyData, img: `https://picsum.photos/seed/${Math.round(Math.random()*10000)}/1920/1080`, id: toString(Math.round(Math.random()*100000))})
    }

    return(
        <>
            <section ref={ref} id="add-new" className="container section-add">
                <div className="hero-header-area">
                    <h1 className="title">Want to post a new offer?</h1>
                    <p className="paragraph">Fill in your property's data below!</p>
                </div>
                <form className="hero-form">
                    <div className="login-area">
                        <label className="paragraph login-label" htmlFor="name">Address</label>
                        <input data-type="name" className="login-input" id="name" type="text" required onChange={handleChange}></input>
                        <label className="paragraph login-label" htmlFor="city">City</label>
                        <input data-type="city" className="login-input" id="city" type="text" required onChange={handleChange}></input>
                        <label className="paragraph login-label" htmlFor="bedrooms">Number of bedrooms</label>
                        <input data-type="bedrooms" className="login-input" id="bedrooms" type="number" required onChange={handleChange}></input>
                        <label className="paragraph login-label" htmlFor="price">Price in $</label>
                        <input data-type="price" className="login-input" id="price" type="number" required onChange={handleChange}></input>
                        <label className="paragraph login-label" htmlFor="desc">Description</label>
                        <textarea data-type="desc" className="login-input add-ta" id="desc" type="text-area" required onChange={handleChange}></textarea>
                    </div>
                    
                    <Link onClick={handleSubmit} to='/'>
                        <button className="btn btn-yellow btn-post" type="submit">Post your offer</button>
                    </Link>
                </form>
            </section>
        </>
    )
}