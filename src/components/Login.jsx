import React from 'react';
import { IonIcon } from '@ionic/react'; // Import IonIcon from Ionic

const Login = () => {
  return (
    <div className="login-container">
      <img className="login-image" src="your-image-url.jpg" alt="Your Image" />
      <div className="login-text">Login</div>
      <input className="input-field" type="text" placeholder="Username" />
      <input className="input-field" type="password" placeholder="Password" />
      {/* Replace the text content with IonIcon */}
      <button className="login-button">
        <IonIcon name="arrow-forward-circle-outline" />
      </button>
    </div>
  );
};

export default Login;