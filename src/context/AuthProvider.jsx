/* eslint-disable no-unused-vars */
import React, { createContext,useState,useEffect } from 'react'
import { getLocalStorage } from '../utils/localStorage'


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
  const [userData, setUserData] = useState(null)

useEffect(() => {
   const {employees,admin} = getLocalStorage()
   setUserData({employees,admin})


}, [])



  return (
    <div>
        <AuthContext.Provider value={userData}>

      {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
