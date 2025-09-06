import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./context/AuthProvider";
// import { getLocalStorage } from './utils/localStorage'

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    if (authData) {
      const loggdeInUser = localStorage.getItem("loggedInUser");
      if (loggdeInUser) {
        setUser(loggdeInUser.role);
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      // eslint-disable-next-line no-undef
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (
      authData &&
      authData.employees.find((e) => email == e.email && e.password == password)
    ) {
      setUser("employee");
      localStorage.setItem(
        "LoggedInUser",
        JSON,
        // eslint-disable-next-line no-undef
        stringify({ role: "employee" })
      );
    } else {
      alert("invalid Caredentials");
    }
  };

  // useEffect(() => {
  // // setLocalStorage()
  // getLocalStorage()

  // }, [])

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  );
};

export default App;
