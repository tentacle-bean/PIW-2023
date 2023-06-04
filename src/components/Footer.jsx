import footer1 from '../assets/footer 1.jpg'
import footer2 from '../assets/footer 2.jpg'

export default function Footer(){
    return(
        <footer id="footer" className="container footer">
            <h2 className="title footer-title">Turn your dreams  of owning a home into a reality.</h2>
            <p className="paragraph footer-paragraph">Contact us today to learn more about our services and how we can assist you in all your real estate needs.</p>
            <a className="btn btn-yellow footer-btn" href="mailto: abc@example.com">Email us!</a>
            <div className="footer-img-area">
                <img className="footer-img" src={footer1}></img>
                <p className="paragraph footer-adr"><i className="fa-solid fa-location-dot"></i> address</p>
                <img className="footer-img" src={footer2}></img>
                <p className="paragraph footer-phone"><i className="fa-solid fa-phone"></i> telephone</p>
            </div>
        </footer>
    )
}