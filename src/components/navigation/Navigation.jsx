import { NavLink } from "react-router-dom"
import './Navigation.scss'

const Navigation = () => {
    return(
        <nav>
            <NavLink to = '/CarsClient/' >Home</NavLink>
            <NavLink to = '/CarsClient/services' >Services</NavLink>
            <NavLink to = '/CarsClient/auth' >Login</NavLink>
        </nav>
    )
}

export default Navigation
