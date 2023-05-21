import {useParams, useLocation} from 'react-router-dom'
import {useRef, useEffect, useState, useContext} from 'react'
import DataContext from '../context/DataContext'

export default function TourPage(){
    const {id} = useParams()

    const {toursData, user} = useContext(DataContext)
    const {name, city, img, desc, bedrooms, price} = {...(toursData.find(data => id===data.id))}

    const ref = useRef()
    const {pathname} = useLocation()
    useEffect(() => {
        ref.current.scrollIntoView()
    },[pathname])

    const [isEmailSent, setIsEmailSent] = useState(false)
    const addressRef = useRef(null)
    const contentRef = useRef(null)

    useEffect(() => {
        if(!isEmailSent){
            addressRef.current.value = user ? user.email : ""
            contentRef.current.value = ""
            contentRef.current.focus()
        }
    }, [user, isEmailSent])

    const handleChange = (event) => {
        const value = event.target.value
        const category  = event.target.getAttribute("data-type")
        
        if(category === "address"){
            addressRef.current.value = value
        }
        else{
            contentRef.current.value = value
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsEmailSent(current => !current)
    }

    const formContent = <>
        <input data-type="address" onChange={handleChange} ref={addressRef} placeholder="your email address" className="login-input tour-page-form-input" type="email" required></input>

        <textarea data-type="content" ref={contentRef} onChange={handleChange} className="login-input tour-page-form-ta" required></textarea>
        <button className='tour-page-form-btn btn btn-yellow'>Send</button>
    </>

    const notificationContent = <>
        <h3 className='title'>{Math.random() > 0.5 ? "Email sent successfully! :)" : "Something went wrong :("}</h3>
        <button className='tour-page-form-btn btn btn-yellow'>Ok</button>
    </>

    return(
        <>
            <section ref={ref} className='section-tour-page container'>
                <div className='tour-page-panel'>
                    <img className="tour-page-img" src={img}></img>
                    <div className='tour-page-name'>
                        <h3 className="title ">{`${name},`}</h3>
                        <h3 className="title">{`${city}`}</h3>
                    </div>
                </div>
                <div className="tour-page-info">
                    <p className="paragraph tour-page-bedrooms"><i className="fa-solid fa-bed"></i> {bedrooms} bedrooms</p>
                    <p className="paragraph accent tour-page-price">{price}</p>
                </div>
                
                <p className="paragraph tour-page-desc">{desc}</p>
                

                <h3 className="title">Want to contact the seller?</h3>
                <p className="subtitle">Send them an email by using the form below!</p> 

                <form onSubmit={handleSubmit} className="tour-page-form">
                    {isEmailSent ? notificationContent : formContent}
                </form>
            </section>
            
        </>
        
    )
}