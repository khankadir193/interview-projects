import { useState, useRef } from 'react';

const FormWithApi = () => {
    const initialState = { name: '', username: '', password: '' };
    const [formData, setFormData] = useState(initialState);
    const [file, setFile] = useState(null);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [apiResult, setApiResult] = useState(null);
    const [apiError, setApiError] = useState('');
    const fileInputRef = useRef(null);

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.username.trim()) newErrors.username = 'Username is required';

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (!file) newErrors.file = 'Please upload a file';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = e => {
        const { name, value } = e.target;

        setFormData(prev => ({ ...prev, [name]: value }));

        setErrors(prev => {
            const next = { ...prev };

            if (name === 'name') {
                if (!value.trim()) next.name = 'Name is required';
                else delete next.name;
            }

            if (name === 'username') {
                if (!value.trim()) next.username = 'Username is required';
                else delete next.username;
            }

            if (name === 'password') {
                if (!value) next.password = 'Password is required';
                else if (value.length < 6) next.password = 'Password must be at least 6 characters';
                else delete next.password;
            }

            return next;
        });
    };

    const handleFileChange = e => {
        const selected = e.target.files[0] || null;
        setFile(selected);

        setErrors(prev => {
            const next = { ...prev };
            if (selected) delete next.file;
            else next.file = 'Please upload a file';
            return next;
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();

        setApiError('');
        setApiResult(null);

        if (!validate()) return;

        setIsSubmitting(true);

        try {
            const payload = {
                name: formData.name,
                username: formData.username,
                password: formData.password,
            };

            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`API error ${response.status}`);
            }

            const data = await response.json();
            setApiResult(data);

            setFormData(initialState);
            setFile(null);
            setErrors({});
            if (fileInputRef.current) fileInputRef.current.value = '';
        } catch (err) {
            setApiError(err.message || 'Failed to submit form');
        } finally {
            setIsSubmitting(false);
        }
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
                <h1 style={{ fontSize: '1.6rem', textAlign: 'center', marginBottom: 16, color: '#1a202c' }}>
                    User Registration with API
                </h1>
                <form onSubmit={handleSubmit} noValidate autoComplete="off">
                    <div style={{ marginBottom: 16 }}>
                        <label htmlFor="name" style={labelStyle}>Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="off"
                            placeholder="Enter name"
                            value={formData.name}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                        {errors.name && <p style={{ color: '#e53e3e', margin: '4px 0 0', fontSize: '0.85rem' }}>{errors.name}</p>}
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <label htmlFor="username" style={labelStyle}>Username</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            autoComplete="off"
                            placeholder="Enter username"
                            value={formData.username}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                        {errors.username && <p style={{ color: '#e53e3e', margin: '4px 0 0', fontSize: '0.85rem' }}>{errors.username}</p>}
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <label htmlFor="password" style={labelStyle}>Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="off"
                            placeholder="Enter password (min 6 chars)"
                            value={formData.password}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                        {errors.password && <p style={{ color: '#e53e3e', margin: '4px 0 0', fontSize: '0.85rem' }}>{errors.password}</p>}
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <label htmlFor="fileUpload" style={labelStyle}>Upload File</label>
                        <input
                            ref={fileInputRef}
                            id="fileUpload"
                            name="fileUpload"
                            type="file"
                            onChange={handleFileChange}
                            style={inputStyle}
                        />
                        {errors.file && <p style={{ color: '#e53e3e', margin: '4px 0 0', fontSize: '0.85rem' }}>{errors.file}</p>}
                        {file && <p style={{ color: '#2f855a', margin: '4px 0 0', fontSize: '0.9rem' }}>Selected file: {file.name}</p>}
                    </div>
                    <button type="submit" style={buttonStyle} disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>

                    {apiError && <p style={{ marginTop: 12, color: '#e53e3e', fontWeight: 600 }}>{apiError}</p>}

                    {apiResult && (
                        <div style={{ marginTop: 12, padding: 10, background: '#f0fff4', border: '1px solid #9ae6b4', borderRadius: 8 }}>
                            <strong>API success response:</strong>
                            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: '8px 0 0', fontSize: '0.85rem' }}>
                                {JSON.stringify(apiResult, null, 2)}
                            </pre>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default FormWithApi;
