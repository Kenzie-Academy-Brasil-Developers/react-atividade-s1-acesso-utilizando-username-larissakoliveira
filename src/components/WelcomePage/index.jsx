
const WelcomePage = ({setIsLoggedIn, user}) =>{
    function HandleLogout (){
    setIsLoggedIn(false)
    }
    
    return(
    
    <>
    <h1>Bem-vinda(o) {user}!</h1>
    <button onClick={HandleLogout}>Logout</button>
    </>
    )
    
    }
    
    export default WelcomePage 