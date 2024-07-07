
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/Usercontextprovider'

function App() {
  
  return (
    <UserContextProvider>
      <h1>Simple Login Page</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App