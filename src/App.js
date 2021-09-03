import './App.css';
import GetUserComponent from './components/GetUserComponent'
import WelcomePage from './components/WelcomePage'
import { useState } from 'react'

function App() {

const [isLoggedIn, setIsLoggedIn] = useState(false)
const [user, setUser] = useState("")

return (
    
<div className="App">
<div className="App-header">
{
isLoggedIn ?
(<WelcomePage user = {user} setIsLoggedIn = {setIsLoggedIn}/>)
:
(<GetUserComponent setUser = {setUser} SetIsLoggedIn = {setIsLoggedIn}/>)

}
</div>
</div>

);
}

export default App;