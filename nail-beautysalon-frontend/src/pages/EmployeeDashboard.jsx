import { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { useAuth } from '../context/AuthContext';
import { getAllEmployees } from '../services/employeeService';

function EmployeeDashboard() {
    const { user, logout } = useAuth();

    // Store employees retrieved from the backend
    const [employees, setEmployees] = useState([]);

    // Track loading
    const [loading, setLoading] = useState(true);

    // Track errors
    const [error, setError] = useState('');

    // Runs when this page loads
    useEffect(() => {

        const loadEmployees = async () => {

            try {
                const response = await getAllEmployees();

                console.log(
                    'Employees received from backend:',
                    response.data
                );

                setEmployees(response.data);

            } catch (error) {

                console.error(
                    'Error retrieving employees:',
                    error
                );

                setError(
                    'Unable to retrieve employees from the server.'
                );

            } finally {

                setLoading(false);

            }
        };

        loadEmployees();

    }, []);

    return (
        <main className="employee-dashboard">

            <Container>

                <div className="dashboard-header">

                    <div>
                        <p className="dashboard-eyebrow">
                            EMPLOYEE PORTAL
                        </p>

                        <h1>
                            Welcome, {user?.name}
                        </h1>

                        <p>
                            Manage your salon activities from your
                            employee dashboard.
                        </p>
                    </div>

                    <Button
                        className="logout-button"
                        onClick={logout}
                    >
                        Logout
                    </Button>

                </div>

                <Row className="g-4">

                    <Col md={4}>
                        <Card className="dashboard-card">
                            <Card.Body>
                                <h3>Appointments</h3>

                                <p>
                                    View and manage salon appointments.
                                </p>

                                <Button className="dashboard-button">
                                    View Appointments
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="dashboard-card">
                            <Card.Body>
                                <h3>My Profile</h3>

                                <p>
                                    View your employee information.
                                </p>

                                <Button className="dashboard-button">
                                    View Profile
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="dashboard-card">
                            <Card.Body>
                                <h3>Account</h3>

                                <p>
                                    Manage your account information.
                                </p>

                                <Button className="dashboard-button">
                                    Account Settings
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

                
<hr className="my-4" />

<h2 className="mb-3">Salon Employees</h2>

{loading && <p>Loading employees...</p>}

{error && (
    <p className="text-danger" role="alert">
        {error}
    </p>
)}

{!loading && !error && (
    <Row className="g-4">
        {employees.length === 0 ? (
            <Col>
                <p>No employees were found.</p>
            </Col>
        ) : (
            employees.map((employee) => (
                <Col md={6} lg={4} key={employee.userId}>
                    <Card className="dashboard-card h-100">
                        <Card.Body>
                            <h5>
                                {employee.firstName}{' '}
                                {employee.lastName}
                            </h5>

                            {/* <p>
                                <strong>Employee ID:</strong>{' '}
                                {employee.employeeId}
                            </p> */}

                            <p>
                                <strong>Email:</strong>{' '}
                                {employee.email}
                            </p>

                            <p>
                                <strong>Cell:</strong>{' '}
                                {employee.cellNumber}
                            </p>

                            <p>
                                <strong>Role:</strong>{' '}
                                {employee.role}
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            ))
        )}
    </Row>
)}


            </Container>

        </main>
    );
}

export default EmployeeDashboard;