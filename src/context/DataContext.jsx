import {useState, createContext, useEffect} from 'react'
import axios from 'axios'
import useLocalStorage from '../hooks/useLocalStorage'

const DataContext = createContext()

// eslint-disable-next-line react/prop-types
function Provider({children}){
    const [getSavedUser, setSavedUser, removeSavedUser] = useLocalStorage()
    const [toursData, setToursData] = useState([])
    const [user, setUser] = useState(getSavedUser())

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

    const login = async (formData) => {
        const response = await axios.get("http://localhost:3001/users")
        const result = response.data.find(user => (user.email === formData.email && user.password === formData.password))

        if(result){
            setUser(result)
            setSavedUser(result)
            return true
        }
        else{
            return false
        }
    }

    const logout =  () => {
        setUser(null)
        removeSavedUser()
    }

    const context={
        toursData,
        addTour,
        user,
        login,
        logout
    }

    return(
        <DataContext.Provider value={context}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext
export {Provider}