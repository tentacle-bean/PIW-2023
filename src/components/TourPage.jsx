import {useParams, useLocation} from 'react-router-dom'
import {useRef, useEffect, useState} from 'react'

export default function TourPage({toursData}){
    const {id} = useParams()

    const {name, city, img, desc} = {...(toursData.find(data => id===data.id))}

    const ref = useRef()
    const {pathname} = useLocation()
    useEffect(() => {
        ref.current.scrollIntoView()
    },[pathname])

    const [emailData, setEmailData] = useState({address: "", content: ""})
    const [isEmailSent, setIsEmailSent] = useState(false)

    const handleChange = (event) => {
        const value = event.target.value
        const category  = event.target.getAttribute("data-type")

        setEmailData(emailData => ({...emailData, [category]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsEmailSent(isEmailSent => !isEmailSent)
        setEmailData({address: "", content: ""})
    }

    const formContent = <>
        <input data-type="address" onChange={handleChange} value={emailData.address} placeholder="your email address" className="login-input tour-page-form-input" type="email" required></input>

        <textarea data-type="content" onChange={handleChange} value={emailData.content} className="login-input tour-page-form-ta" required></textarea>
        <button className='tour-page-form-btn btn btn-yellow'>Send</button>
    </>

    const notificationContent = <>
        <h3 className='title'>{Math.random() > 0.5 ? "Email succesfully sent! :)" : "Something went wrong :("}</h3>
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