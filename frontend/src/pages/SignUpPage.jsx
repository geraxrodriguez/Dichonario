import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/Login.module.css'

const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   const handleSignUp = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:2222/auth/sign-up', { username, email, password });
            alert('Sign-up successful!');
        } catch (error) {
            alert('Sign-up failed!');
        }
    };


    return (
        <section className={styles.prompt}>

            {/* HEADERS */}
            <h3 className={styles.dichonarioHeader}>Dichonario</h3>
            <h1 className={styles.signInHeader}>Sign Up</h1>

            {/* FORM */}
            <form className={styles.form} onSubmit={handleSignUp}>

                {/* USERNAME */}
                <section className={styles.sections}>
                    <label className={styles.labels} htmlFor="username">
                        Username
                    </label>
                    <input 
                        className={styles.inputs} 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        required 
                        autoFocus 
                    />
                </section>

                {/* EMAIL */}
                <section className={styles.sections}>
                    <label className={styles.labels} htmlFor="email">
                        Email
                    </label>
                    <input 
                        className={styles.inputs} 
                        type="text" 
                        id="email" 
                        name="email" 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required 
                    />
                </section>

                {/* PASSWORD */}
                <section className={styles.sections}>
                    <label className={styles.labels} htmlFor="current-password">
                        Password
                    </label>
                    <input 
                        className={styles.inputs} 
                        id="password" 
                        name="password" 
                        type="password" 
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required 
                    />
                </section>

                {/* BUTTON */}
                <button className={styles.signInButton} type="submit">Sign Up</button>

            </form>

            <hr className={styles.hr} />
            <p className="help">Already have an account? <a href="/login">Login</a></p>
        </section>
    )
}

export default SignUpPage;
