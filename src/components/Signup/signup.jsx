import React, { useState } from 'react';

import styles from '../../common/css/signup.module.css'; // Correct import path
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useNavigate } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const ModernLoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const navigate = useNavigate();

  return (

    
      <div className={`${styles.container} ${isSignUp ? styles['sign-up-mode'] : ''}`} id="container">
      
      <div className={`${styles['form-container']} ${styles['sign-in']}`}>
        <form>
          <h2>Sign In</h2>
          <div className={styles['social-icons']}>
            <a href="#" className={styles.icon}><GoogleIcon /></a>
            <a href="#" className={styles.icon}><FacebookIcon/></a>
            <a href="#" className={styles.icon}>< GitHubIcon/></a>
            <a href="#" className={styles.icon}><LinkedInIcon /></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className={styles['toggle-container']}>
        <div className={styles.toggle}>
          <div className={`${styles['toggle-panel']} ${styles['toggle-left']} ${isSignUp ? '' : styles.hidden}`}>
            <h2>Welcome Back!</h2>
            <p>Enter your personal details to use all site features</p>
            <button onClick={handleToggle} id="login">Sign In</button>
          </div>
          <div className={`${styles['toggle-panel']} ${styles['toggle-right']} ${isSignUp ? styles.hidden : ''}`}>
            <h2>Welcome, Friend!</h2>
            <p>Enter your personal details to use all site features</p>
            <button onClick={() => navigate("/signin")}>Sign in</button>
          </div>
        </div>
      </div>
    </div>
 
    
  );
};

export default ModernLoginPage;
