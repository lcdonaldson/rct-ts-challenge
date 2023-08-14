import React, { useState } from 'react';
import {
  useNavigate
} from "react-router-dom"; 

interface LoginProps {
  onLogin: (userName: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [userName, setUserName] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = () => { 
    if (userName) {
      onLogin(userName);
      navigate('/dashboard')
    }
  };

  return (
    <div className="splash">
      <div className="login-LO">
        <input
          className="login-input" 
          type="text"
          placeholder="Enter your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        /> 
        <button className="login-btn" 
          onClick={handleLogin}
        >Log In</button>
      </div>
    </div>
  );
};

export default Login;