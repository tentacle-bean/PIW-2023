import {useState, createContext} from 'react'
import data from '../assets/data.js'

const DataContext = createContext()

// eslint-disable-next-line react/prop-types
function Provider({children}){
    const [toursData, setToursData] = useState(data)

    const addTour = (newTour) => {
        setToursData(current => [...current, newTour])
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