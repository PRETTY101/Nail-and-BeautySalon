import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useAuth } from '../context/AuthContext';

function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setLoading(true);

        try {
            const userData = await login(email, password);
            if (userData.role === 'ROLE_ADMIN') navigate('/admin');
            else if (userData.role === 'ROLE_EMPLOYEE') navigate('/employee/dashboard');
            else navigate('/customer/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Invalid email or password');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <div className="auth-header">
                    <p className="auth-eyebrow">NAIL & BEAUTY</p>
                    <h1>Welcome back</h1>
                    <p>Sign in to access your account.</p>
                </div>

                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            disabled={loading}
                        />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                            disabled={loading}
                        />
                    </Form.Group>

                    <div className="auth-button-wrapper">
                        <Button type="submit" className="auth-button" disabled={loading}>
                            {loading ? 'Logging in...' : 'Log In'}
                        </Button>
                    </div>

                    <p className="auth-footer">
                        New customer? <Link to="/signup">Create an account</Link>
                    </p>
                </Form>
            </div>
        </div>
    );
}

export default Login;