import {useState, createContext} from 'react'
import data from '../assets/data.js'

const DataContext = createContext()

function Provider({children}){
    const [toursData, setToursData] = useState(data)

    const addTour = (newTour) => {
        setToursData(toursData => [...toursData, newTour])
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