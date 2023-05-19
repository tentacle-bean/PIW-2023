import heroImage from '../assets/hero image.png'

export default function Home(){
    return(
        <section id="home" className="container section-home">
            <div className="hero-panel">
                <div className="hero-header-area">
                    <h1 className="title">Find your dream home today!</h1>
                    <p className="paragraph">Log in and book a house tour with our real estate agent!</p>
                </div>
                <form className="hero-form">
                    <div className="login-area">
                        <label className="paragraph login-label" htmlFor="login">Login</label>
                        <input className="login-input" id="login" type="text"></input>
                        <label className="paragraph login-label" htmlFor="password">Password</label>
                        <input className="login-input" id="password" type="password"></input>
                    </div>
                    <div className="login-links">
                        <p className="paragraph">No account?<a className="login-link register-link" href="#">Register</a></p>
                        <a className="login-link paragraph" href="#">Forgot password</a>
                    </div>
                    <button className="btn btn-yellow" type="submit">Log in</button>
                </form>
            </div>
            <img className="hero-img" src={heroImage} alt="Picture of a house"></img>
        </section>
    )
}