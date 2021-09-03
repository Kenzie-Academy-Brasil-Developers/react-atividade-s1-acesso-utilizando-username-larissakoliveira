import { useState } from 'react'
import './style.css'

const GetUserComponent = ({setUser, SetIsLoggedIn})=>{

    const [userInput, setUserInput] = useState('')

        function HandleLogin(){
            setUser(userInput)
            SetIsLoggedIn(true)
        }

    return (

        <form>
            <input type="text" value={userInput} onChange={(event) => setUserInput(event.target.value)} />
            <button onClick={HandleLogin}>Acessar com o nome</button>
        </form>

    )
}

export default GetUserComponent