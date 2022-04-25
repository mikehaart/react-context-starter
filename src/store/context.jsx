import React, { createContext, useState, useContext } from 'react'

export const MyContext = createContext({})

export const StoreProvider = ({children}) => {
    const [state, setState] = useState({
        title: 'le div',
    })
    return (
        <MyContext.Provider value={{state, setState}}>{children}</MyContext.Provider>
        )
}

export const useStateProvider = () => useContext(MyContext)