import { useContext, useState } from 'react'
import Tour from './Tour.jsx'
import DataContext from '../context/DataContext.jsx'

export default function Tours(){
    const {toursData} = useContext(DataContext)

    const [formData, setFormData] = useState({city: "", bedrooms: "", desc: "", order: "descending"})

    const handleChange = event => {
        const category = event.target.getAttribute("data-form-type")
        const value = event.target.value
        setFormData(current => ({...current, [category]: value}))
    } 

    const allTours = toursData.map((data) => 
        <Tour
            key={data.id}
            id={data.id}
            name={data.name}
            city={data.city}
            desc={data.desc}
            img={data.img}
            bedrooms={data.bedrooms}
            price={data.price}
        />
    )

    const shownTours = allTours.filter((tour) => {
        const cityCondition = tour.props["city"].toLowerCase().includes(formData.city.toLowerCase())
        const bedroomsCondition = tour.props["bedrooms"].includes(formData.bedrooms.toLowerCase())
        const descCondition = tour.props["desc"].toLowerCase().includes(formData.desc.toLowerCase())
        return (cityCondition && bedroomsCondition && descCondition)
    })

    shownTours.sort((a, b) =>{
        const firstPrice = Number(a.props.price.slice(1))
        const secondPrice = Number(b.props.price.slice(1))

        if(formData.order === "ascending"){
            return (firstPrice > secondPrice) ? 1 : -1
        }
        else{
            return (firstPrice < secondPrice) ? 1 : -1
        }
    })

    return(
        <>
            <section id="tours" className="container section-tours">
                <h2 className="title">Book a house tour to find your dream place!</h2>

                <form className="tours-form">
                    <h3 className='paragraph'>Search by...</h3>
                    <div className="tours-form-inputs">
                        <input className="login-input" data-form-type="city" placeholder="city" type="text" value={formData.city} onChange={handleChange}></input>
                        <input className="login-input" data-form-type="bedrooms" placeholder="nr of bedrooms" type="number" value={formData.bedrooms} onChange={handleChange}></input>
                        <input className="login-input" data-form-type="desc" placeholder="description" type="text" value={formData.desc} onChange={handleChange}></input>
                    </div>
                    
                    <h3 className='paragraph'>Order by price from...</h3>
                    <div className="tours-form-radio">
                        <label className="paragraph" htmlFor="form-radio-descending">highest to lowest
                            <input id="form-radio-descending" data-form-type="order" type="radio" value="descending" checked={formData.order==="descending"} onChange={handleChange}></input>
                        </label>
                        
                        <label className="paragraph" htmlFor="form-radio-ascending">lowest to highest
                            <input id="form-radio-ascending" data-form-type="order" type="radio" value="ascending" checked={formData.order==="ascending"} onChange={handleChange}></input>
                        </label>
                        
                    </div>

                </form>

                
                <div className="tour-panel-area">
                    {
                        shownTours.length ? 
                        shownTours :
                        <h3>No tours available...</h3>
                    }
                    
                </div>
            </section>
        </>
        
    )
}