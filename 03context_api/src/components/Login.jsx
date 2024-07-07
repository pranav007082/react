import React, { useState, useContext } from 'react';
import UserContext from '../context/Usercontext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Login</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Username'
                    style={styles.input}
                />
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Submit</button>
            </form>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
        background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        textAlign: 'center',
        color: '#333',
        fontFamily: 'Arial, sans-serif'
    },
    heading: {
        marginBottom: '20px',
        fontSize: '24px',
        color: '#111',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    input: {
        width: 'calc(100% - 20px)',
        padding: '10px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
        fontSize: '16px'
    },
    button: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s, transform 0.3s',
        fontSize: '16px'
    },
    buttonHover: {
        backgroundColor: '#0056b3',
        transform: 'scale(1.05)'
    }
};

export default Login;
