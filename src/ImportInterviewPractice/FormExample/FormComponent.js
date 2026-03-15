import { useState } from 'react';

const FromComponenet = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [file, setFile] = useState(null);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!formData.username.trim()) {
            newErrors.username = 'Username is required';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (!file) {
            newErrors.file = 'Please upload a file';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = e => {
        const { name, value } = e.target;

        setFormData(prev => ({ ...prev, [name]: value }));

        setErrors(prev => {
            const next = { ...prev };

            if (name === 'username') {
                if (!value.trim()) {
                    next.username = 'Username is required';
                } else {
                    delete next.username;
                }
            }

            if (name === 'password') {
                if (!value) {
                    next.password = 'Password is required';
                } else if (value.length < 6) {
                    next.password = 'Password must be at least 6 characters';
                } else {
                    delete next.password;
                }
            }

            return next;
        });
    };

    const handleFileChange = e => {
        const selected = e.target.files[0] || null;
        setFile(selected);

        setErrors(prev => {
            const next = { ...prev };
            if (selected) {
                delete next.file;
            } else {
                next.file = 'Please upload a file';
            }
            return next;
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (!validate()) return;

        console.log('Form submitted');
        console.log('Username:', formData.username);
        console.log('Password:', formData.password);
        console.log('File:', file);

        // Optionally clear form after submit
        setFormData({ username: '', password: '' });
        setFile(null);
        setErrors({});

        // If file input needs reset, we can also use ref (not required here)
    };

    const containerStyle = {
        width: '100%',
        maxWidth: 460,
        margin: '30px auto',
        padding: '22px',
        boxSizing: 'border-box',
        background: '#fff',
        borderRadius: 12,
        boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
        border: '1px solid #e2e8f0',
    };

    const labelStyle = { display: 'block', marginBottom: 6, fontWeight: 600, color: '#2d3748' };
    const inputStyle = {
        display: 'block',
        width: '100%',
        padding: '10px 12px',
        marginBottom: 4,
        borderRadius: 8,
        border: '1px solid #cbd5e0',
        fontSize: 15,
    };

    const buttonStyle = {
        width: '100%',
        padding: '11px 16px',
        borderRadius: 8,
        border: 'none',
        background: '#2b6cb0',
        color: '#fff',
        fontWeight: 700,
        cursor: 'pointer',
    };

    return (
        <div style={{ minHeight: '80vh', background: '#f7fafc', padding: 10, boxSizing: 'border-box' }}>
            <div style={containerStyle}>
                <h1 style={{ fontSize: '1.6rem', textAlign: 'center', marginBottom: 16, color: '#1a202c' }}>User Login</h1>
                <form onSubmit={handleSubmit} noValidate>
                <div style={{ marginBottom: 16 }}>
                    <label htmlFor="username" style={labelStyle}>Username</label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Enter username"
                        value={formData.username}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                    {errors.username && (
                        <p style={{ color: '#e53e3e', margin: '4px 0 0', fontSize: '0.85rem' }}>{errors.username}</p>
                    )}
                </div>

                <div style={{ marginBottom: 16 }}>
                    <label htmlFor="password" style={labelStyle}>Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter password (min 6 chars)"
                        value={formData.password}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                    {errors.password && (
                        <p style={{ color: '#e53e3e', margin: '4px 0 0', fontSize: '0.85rem' }}>{errors.password}</p>
                    )}
                </div>

                <div style={{ marginBottom: 16 }}>
                    <label htmlFor="fileUpload" style={labelStyle}>Upload File</label>
                    <input
                        id="fileUpload"
                        name="fileUpload"
                        type="file"
                        onChange={handleFileChange}
                        style={inputStyle}
                    />
                    {errors.file && (
                        <p style={{ color: '#e53e3e', margin: '4px 0 0', fontSize: '0.85rem' }}>{errors.file}</p>
                    )}
                    {file && <p style={{ color: '#2f855a', margin: '4px 0 0', fontSize: '0.9rem' }}>Selected file: {file.name}</p>}
                </div>

                <button type="submit" style={buttonStyle}>
                    Submit
                </button>
            </form>
        </div>
    </div>
    );
};

export default FromComponenet;