import { Link } from 'react-router-dom'
import './Home.css'
import Button from './Button'
import Card from './Card'
import UseEffect from './UseEffect'
function Home(){
    return(
        <>
        <Button text="Login"/>
        <Button text="Logout"/>
        <Button text="Register"/>
        <nav className="navbar">
        <div className="logo">MyLogo</div>
        <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="#">Services</a></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        </nav>

        <Card title = "Football" desc="Football is a worldwide popular game" color='red'/>
        <Card title = "Cricket" desc="Cricket is a worldwide popular game" color='blue'/>
        <UseEffect></UseEffect>
        

        </>
    )
}

export default Home