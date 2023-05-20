import { useContext, useState } from 'react'
import DataContext from '../context/DataContext'
import heroImage from '../assets/hero image.png'

export default function Home(){
    const [formData, setFormData] = useState({email: "", password: ""})
    const {user, login, logout} = useContext(DataContext)
    const [showUser, setShowUser] = useState(user)

    const handleChange = event => {
        const category = event.target.getAttribute("data-type")
        let value = event.target.value

        setFormData(current => ({...current, [category]: value}))
    } 

    const handleSubmit = (event) => {
        event.preventDefault()
        setFormData({email: "", password: ""})
        login(formData)
        setShowUser(true)
    }

    const handleClick = () => {
        logout()
        setShowUser(false)
    }

    const formArea = showUser ?
        user ?
            <div className='user-area'>
                <h3 className='paragraph'>You are logged in as</h3>
                <h3 className='title'>{user.name} {user.surname}</h3>
                <button className='btn btn-yellow' onClick={handleClick}>Log out</button>
            </div>
        :
            <div className='user-area'>
                <h3 className='paragraph'>User not found</h3>
                <button className='btn btn-yellow' onClick={() => setShowUser(false)}>Try again</button>
            </div>
    :
        <form onSubmit={handleSubmit} className="hero-form">
            <div className="login-area">
                <label className="paragraph login-label" htmlFor="login">Email</label>
                <input data-type="email" className="login-input" id="login" type="email" required onChange={handleChange} value={formData.email}></input>
                <label className="paragraph login-label" htmlFor="password">Password</label>
                <input data-type="password" className="login-input" id="password" type="password" required onChange={handleChange} value={formData.password}></input>
            </div>
            <div className="login-links">
                <p className="paragraph">No account?<a className="login-link register-link" href="#">Register</a></p>
                <a className="login-link paragraph" href="#">Forgot password</a>
            </div>
            <button className="btn btn-yellow" type="submit">Log in</button>
        </form>

    return(
        <section id="home" className="container section-home">
            <div className="hero-panel">
                <div className="hero-header-area">
                    <h1 className="title">Find your dream home today!</h1>
                    <p className="paragraph">Log in and book a house tour with our real estate agent!</p>
                </div>
                {formArea}
            </div>
            <img className="hero-img" src={heroImage} alt="Picture of a house"></img>
        </section>
    )
}