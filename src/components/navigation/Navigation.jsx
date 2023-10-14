import { NavLink } from "react-router-dom"
import './Navigation.scss'

const Navigation = () => {
    return(
        <nav>
            <NavLink to = '/' >Home</NavLink>
            <NavLink to = '/services' >Services</NavLink>
        </nav>
    )
}

export default Navigation