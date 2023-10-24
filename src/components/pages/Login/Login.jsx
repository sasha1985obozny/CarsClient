import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { checkIsAuth, loginUser } from 'features/auth/authSlice';
import { toast } from 'react-toastify';
import './Login.scss';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { status } = useSelector((state) => state.auth)
  const { userEmail } = useSelector((state) => state.auth)

  const isAuth = useSelector(checkIsAuth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if(status){
      toast.success(status)
    }
    if(isAuth){
      console.log(userEmail);
      console.log(isAuth);
      (userEmail==='test103@ukr.net') ? navigate('/admin') :
      navigate('/user')
    }
  }, [status, isAuth, userEmail, navigate])

  const handleSubmit = () => {
    try{
      console.log(status)
      console.log(email)
      dispatch(loginUser({ email, password }))
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
        <h1>Авторизація</h1>
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
            className="login-form-btn"
            onClick={handleSubmit}
            >Увійти</button>
            <div className="alredy-or-not">Не маєте облікового запису?</div>
            <Link 
            to='/register'
            className='link-to'>Реєстрація</Link>
        </div>
    </form>
    </div>
  )
}

export default Login