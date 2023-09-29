import { toast } from 'react-hot-toast';
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Cookies from 'js-cookie';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'http://localhost:4000/login',
        { email, password } 
      );
      if (response.status === 200) {
        toast.error(response.data.error);
      }
      if (response.status === 201) {
        toast.success(response.data.message,response.data.people);
        Cookies.set('people', response.data.people);
		window.location = "/";
      }
	 
    } catch (error) {
		toast.error('Login failed.  check your credentials.');
    }
  };


  return (
	<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
    <div className={styles.form_container}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
		className={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
		className={styles.input}
      />
      <button onClick={handleLogin} className={styles.green_btn}>Login</button>
	   </div>
	   </div>
	   <div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sing Up
						</button>
					</Link>
				</div>
    </div>
    </div>
  );
};

export default Login;
