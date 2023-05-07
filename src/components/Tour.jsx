import {Link} from 'react-router-dom'

export default function Tour({id, name, city, desc, img, bedrooms, price}){
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
                <Link className="tour-btn" to={`/tour/${id}`}>
                    <button className="btn btn-blue">Book a meeting</button>
                </Link> 
                
            </div>
        </>
    )
}