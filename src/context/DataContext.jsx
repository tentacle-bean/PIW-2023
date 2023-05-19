import {useState, createContext, useEffect} from 'react'
import axios from 'axios'

const DataContext = createContext()

// eslint-disable-next-line react/prop-types
function Provider({children}){
    const [toursData, setToursData] = useState([])

    const fetchData = async () => {
        const response = await axios.get("http://localhost:3001/data")
        setToursData(response.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const addTour = async (newTour) => {
        const response = await axios.post("http://localhost:3001/data", {
            ...newTour
        })
        setToursData(current => [...current, response.data])
    }

    const context={
        toursData,
        addTour
    }

    return(
        <DataContext.Provider value={context}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext
export {Provider}