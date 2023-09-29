import React from 'react';
import './Login.css';
import logoIcon from './LogoIcon.svg'; // Import the LogoIcon.svg image
import buttonLoginSvg from './buttonLogin.svg'; // Import the buttonLogin.svg image

const Login = () => {
  return (
    <div className="login-container">
      <img className="login-image" src={logoIcon} alt="Logo Icon" /> {/* Use the LogoIcon.svg image */}
      <div className="login-text">Login</div>
      <input className="input-field" type="text" placeholder="Username" />
      <input className="input-field" type="password" placeholder="Password" />
      <button className="login-button" style={{ backgroundColor: 'transparent', border: 'none' }}>
        <img src={buttonLoginSvg} alt="Login Button" /> {/* Use the buttonLogin.svg image */}
      </button>
    </div>
  );
};

export default Login;
