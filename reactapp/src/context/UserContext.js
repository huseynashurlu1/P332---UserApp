import { createContext, useEffect, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const storedUser = JSON.parse(localStorage.getItem('users'));
    const [user, setUser] = useState(storedUser)
    const [value, setValue] = useState('')

    useEffect(() => {
        localStorage.setItem('users',JSON.stringify(user))
    }, [user])

    const followUser = (newUser) => {
        setUser(prevData => [...prevData, newUser])
    }

    const unFollowUser = (userId) => {
        setUser(prevData => prevData.filter(item => item.login.uuid !== userId))
    }

    const searchUser = (value) => {
        setValue(value)
    }

    useEffect(() => {
        if(JSON.parse(localStorage.getItem('users')) === null) {
            localStorage.setItem('users', JSON.stringify([]))
        }
    }, [])

    return(
        <UserContext.Provider value={{user, followUser, unFollowUser, searchUser,value}}>
            {children}
        </UserContext.Provider>
    )
}