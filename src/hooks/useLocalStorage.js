export default function useLocalStorage(){
    const getSavedUser = () => {
        return JSON.parse(localStorage.getItem("user"))
    }

    const setSavedUser = (user) => {
        localStorage.setItem("user", JSON.stringify(user))
    }

    const removeSavedUser = () => [
        localStorage.removeItem("user")
    ]

    return [getSavedUser, setSavedUser, removeSavedUser]
}