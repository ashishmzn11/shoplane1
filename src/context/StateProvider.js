import { createContext, useContext, useReducer, useState } from "react";
export const StateContext = createContext()
export const StateProvider = ({ children}) =>{

const [cart,setcart]=useState([])
    return <StateContext.Provider value={[cart, setcart]}>
        {children}
    </StateContext.Provider>
}

export const useStateValues=()=> useContext(StateContext)

export default StateProvider;