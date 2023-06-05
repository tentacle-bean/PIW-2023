import { useEffect, useState } from 'react'
import {auth} from './init'
import {
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
    signOut,
} from 'firebase/auth'

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

export const logInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, googleProvider)
    }
    catch (err) {
        console.error(err)
        alert(err.message)
    }
}

export const logInWithGithub = async () => {
    try {
        await signInWithPopup(auth, githubProvider)
    }
    catch (err) {
        console.error(err)
        alert(err.message)
    }
}

export const  useAuth = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = 
            auth.onAuthStateChanged((u) => {
                setUser(u)
            })
        
        return () => unsubscribe()
    }, [])
    return user
}

export const firebaseLogout = () => signOut(auth)