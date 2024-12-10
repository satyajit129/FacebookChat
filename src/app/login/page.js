'use client';

import { useState } from 'react';
import styles from "@/styles/Login.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError('All fields are required.');
      return;
    }
    console.log('Logging in with', email, password);
  };

  return (
    <div className={styles.loginContainer}>
    <div className={styles.loginForm}>
      <h1 className={styles.loginTitle}>Login</h1>
      {error && <p className={styles.errorMessage}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Email:</label>
          <input
            className={styles.formInput}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Password:</label>
          <input
            className={styles.formInput}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className={styles.submitButton} type="submit">Login</button>
      </form>
    </div>
  </div>
  );
}
