/* eslint-disable no-unused-vars */
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useState } from 'react'
// import { getLocalStorage } from './utils/localStorage'

const App = () => {

const [user,setUser] = useState(null)
const handleLogin = (email,password)=>{
 if(email == "admin@me.com" && password == "123"){
setUser("admin")
console.log(user)
 }else if(email == "user@me.com" && password == "123"){
   setUser("employee")
   console.log(user)
 }
 else{
  alert("invalid Caredentials")
 }
}

  // useEffect(() => {
  // // setLocalStorage()
  // getLocalStorage()
  

  // }, [])
  



  return (
<>
{!user ? <Login handleLogin={handleLogin}/> : ""}
{user == "admin" ? <AdminDashboard/> :<EmployeeDashboard/>}
{/* <EmployeeDashboard/> */}
{/* <AdminDashboard/> */}

</>
  )
}

export default App
