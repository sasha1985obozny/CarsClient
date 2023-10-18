import { useState } from "react";
import './Auth.scss';
import Navigation from 'components/navigation/Navigation';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    console.log(email, password);

    return <div className="auth-page">
        <Navigation />
        <h1 className="auth-header">
            { isLogin? 'Login' : 'Registration'}
        </h1>
        <div className="form-wrapper">
        <form 
        className="auth-form">
            <input type="text" className="input" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" className="input" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>

            <button className="auth-form-btn">
                { isLogin? 'Login' : 'Registration'}
            </button>
        </form>

        <div>
            {
                isLogin ? (
                    <div className="auth-toggle"><span className="auth-span">Don't have an account?</span>
                    <button 
                        className="auth-btn-toggle"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        Register
                    </button>
                    </div>
                ) : (
                    <div className="auth-toggle"><span className="auth-span">Already have an account?</span>
                    <button 
                        onClick={() => setIsLogin(!isLogin)}
                        className="auth-btn-toggle">
                        Login
                    </button>
                    </div>
                )
            }
        </div>
        </div>
    </div>
}

export default Auth