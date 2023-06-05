import { logInWithGoogle, logInWithGithub, useAuth, firebaseLogout } from '../firebase/UserService'
import heroImage from '../assets/hero image.png'

export default function Home(){
    const user = useAuth()
    console.log(user)

    const handleGoogle = async (event) => {
        event.preventDefault()
        await logInWithGoogle()
    }

    const handleGithub = async (event) => {
        event.preventDefault()
        await logInWithGithub()
    }

    const handleClick = () => {
        firebaseLogout()
    }

    const formArea = user ?
        <div className='user-area'>
            <h3 className='paragraph'>You are logged in as</h3>
            <h3 className='title'>{user.displayName}</h3>
            <button className='btn btn-yellow' onClick={handleClick}>Log out</button>
        </div>
    :
        <div className='user-btns'>
            <button className="btn btn-yellow" onClick={handleGoogle}>Log in with Google</button>
            <button className="btn btn-yellow" onClick={handleGithub}>Log in with Github</button>
        </div>
        
        
        

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