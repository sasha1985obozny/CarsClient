import { useEffect, useState } from 'react';
import './Auth.scss';
import Navigation from 'components/navigation/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from 'features/auth/authSlice';
import { toast } from 'react-toastify';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const {status} = useSelector((state) => state.auth)

  const dispatch = useDispatch()

  useEffect(() => {
    if(status){
      toast(status)
    }
  }, [status])

  const handleSubmit = () => {
    console.log(email)
    console.log(password)
    try {
      dispatch(registerUser({ email, password }))
      setPassword('')
      setEmail('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="auth-page">
      <Navigation />
      <h1 className="auth-header">{isLogin ? 'Login' : 'Registration'}</h1>
      <div className="form-wrapper">
        <form 
          className="auth-form"
          onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="input"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button 
            className="auth-form-btn"
            onClick={handleSubmit}>
            {isLogin ? 'Login' : 'Registration'}
          </button>
        </form>

        <div>
          {isLogin ? (
            <div className="auth-toggle">
              <span className="auth-span">Don't have an account?</span>
              <button
                className="auth-btn-toggle"
                onClick={() => setIsLogin(!isLogin)}
              >
                Register
              </button>
            </div>
          ) : (
            <div className="auth-toggle">
              <span className="auth-span">Already have an account?</span>
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="auth-btn-toggle"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
