import { useContext, useState, useRef, useEffect } from 'react'
import { useAuth } from '../firebase/UserService'
import {Link} from 'react-router-dom'
import DataContext from '../context/DataContext'

export default function AddNew(){
    const {addTour} = useContext(DataContext)
    const user = useAuth()

    const ref = useRef(null)

    useEffect(() => {
        ref.current.scrollIntoView()
    },[])

    const [propertyData, setPropertyData] = useState({name: "", city: "", bedrooms: "", price: "", desc: ""})
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = event => {
        const category = event.target.getAttribute("data-type")
        let value = event.target.value
        if(category === "price"){
            value = '$' + value
        }

        setPropertyData(current => ({...current, [category]: value}))
    } 

    const handleSubmit = (event) => {
        event.preventDefault()
        addTour({...propertyData, email: user.email, img: `https://picsum.photos/seed/${Math.round(Math.random()*10000)}/1920/1080`})
        
        setIsSubmitted(true)
        ref.current.scrollIntoView()
    }

    const formArea = !user ?
        <Link to="/">
            <button className="btn btn-yellow">Home page</button>
        </Link> 
    :
        !isSubmitted ?
            <form onSubmit={handleSubmit} className="hero-form">
                <div className="login-area">
                    <label className="paragraph login-label" htmlFor="name">Address</label>
                    <input data-type="name" className="login-input" id="name" type="text" required onChange={handleChange}></input>
                    <label className="paragraph login-label" htmlFor="city">City</label>
                    <input data-type="city" className="login-input" id="city" type="text" required onChange={handleChange}></input>
                    <label className="paragraph login-label" htmlFor="bedrooms">Number of bedrooms</label>
                    <input data-type="bedrooms" className="login-input" id="bedrooms" type="number" min="0" required onChange={handleChange}></input>
                    <label className="paragraph login-label" htmlFor="price">Price in $</label>
                    <input data-type="price" className="login-input" id="price" type="number" min="0" required onChange={handleChange}></input>
                    <label className="paragraph login-label" htmlFor="desc">Description</label>
                    <textarea data-type="desc" className="login-input add-ta" id="desc" type="text-area" required onChange={handleChange}></textarea>
                </div>
                <button className="btn btn-yellow btn-post" type="submit">Post your offer</button>
            </form>
        :   
            <h1 className='title'>Offer posted successfully!</h1>

    return(
        <>
            <section ref={ref} id="add-new" className="container section-add">
                <div className="hero-header-area">
                    <h1 className="title">Want to post a new offer?</h1>
                    <p className="paragraph">{user ? "Fill in your property's data below!" : "You should log in first!"}</p>
                </div>
                {formArea}
            </section>
        </>
    )
}