import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { checkIsAuth, registerUser } from 'features/auth/authSlice';
import { toast } from 'react-toastify';
import '../Login/Login.scss';

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { status } = useSelector((state) => state.auth)
  const isAuth = useSelector(checkIsAuth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if(status){
      toast.success(status)
    }
    if(isAuth){
      navigate('/login')
    }
  }, [status, isAuth, navigate])

  const handleSubmit = () => {
    try{
      dispatch(registerUser({ email, password }))
      setPassword('')
      setEmail('')
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className='form-wrapper'>
    <form 
        className="login-form"
        onSubmit={e => e.preventDefault()}>
        <h1>Реєстрація</h1>
        <label>
            Email:
            <input type="text" 
                className="input"
                value = {email}
                onChange = {e => setEmail(e.target.value)}
                placeholder='Email'/>
        </label>
        <label>
            Пароль:
            <input type="password" 
                className="input"
                value = {password}
                onChange = {e => setPassword(e.target.value)}
                placeholder='Пароль'/>
        </label>
        <div>
            <button 
            type='submit' 
            onClick={handleSubmit}
            className="login-form-btn"

            >Зареєструватись</button>
            <div className="alredy-or-not">Вже зареєстровані?</div>
            <Link 
            to='/login'
            className='link-to'>Увійти</Link>
        </div>
    </form>
    </div>
  )
}

export default Register
