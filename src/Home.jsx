import { Link } from 'react-router-dom'
import './Home.css'
function Home(){
    return(
        <nav className="navbar">
        <div className="logo">MyLogo</div>
        <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="#">Services</a></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        </nav>
    )
}

export default Home

