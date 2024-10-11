import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Login.module.css'

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            // await axios.post('https://dichonario.netlify.app/login', { username, password })            // console.log('sending axios')
            const res = await axios.post('http://localhost:2222/auth/login', { username, password });
            if (res.status === 200) {
                navigate('/')
            }
        } catch (error) {
            alert('Login failed frontend');
        }
    };


    return (
        <section className={styles.prompt}>

            {/* HEADERS */}
            <h3 className={styles.dichonarioHeader}>Dichonario</h3>
            <h1 className={styles.signInHeader}>Sign in</h1>

            {/* FORM */}
            <form className={styles.form} onSubmit={handleLogin}>

                {/* USERNAME */}
                <section className={styles.sections}>
                    <label className={styles.labels} htmlFor="username">
                        Username
                    </label>
                    <input 
                        className={styles.inputs} 
                        type="text" 
                        name="username" 
                        id="username" 
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        required 
                        autoFocus 
                    />
                </section>

                {/* PASSWORD */}
                <section className={styles.sections}>
                    <label className={styles.labels} htmlFor="current-password">
                        Password
                    </label>
                    <input 
                        className={styles.inputs} 
                        name="password" 
                        id="password" 
                        type="password" 
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required 
                    />
                </section>

                {/* BUTTON */}
                <button className={styles.signInButton} type="submit">Sign in</button>

            </form>

            <hr className={styles.hr} />
            <p className="help">Don't have an account? <a href="/sign-up">Sign up</a></p>
        </section>
    )
}

export default LoginPage
