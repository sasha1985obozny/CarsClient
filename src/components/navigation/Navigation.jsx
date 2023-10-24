import React, { useEffect } from 'react'
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; 
import { checkIsAuth, logout } from "features/auth/authSlice";
import { toast } from "react-toastify";
import './Navigation.scss'

const Navigation = () => {
    const isAuth = useSelector(checkIsAuth);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if(!isAuth){
          navigate('/')
        }
      }, [isAuth, navigate])

    const logoutHandler = () => {
        dispatch(logout())
        window.localStorage.removeItem('token')
        toast('Ви вийшли із системи')
    }

    return(
        <nav>
            <span className="logo">CS</span>

            {
                isAuth && (
                    <ul className="menu">
                        <li><NavLink to = '/' >Home</NavLink></li>
                        <li><NavLink to = '/services' >Services</NavLink></li>
                    </ul>
                )
            }  

            <div className="sign-in">
                {
                    isAuth ? (
                    <button 
                    onClick={logoutHandler}
                    className="logout-btn"
                    >Logout</button>
                    ) : (<Link to="/login">Login</Link>)
                }
            </div>     
        </nav>
    )
}

export default Navigation