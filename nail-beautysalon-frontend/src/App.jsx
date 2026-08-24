import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavigationBar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Login from './pages/Login';
import EmployeeDashboard from './pages/EmployeeDashboard';

import ServiceCatalogue from './Service/ServiceCatalogue.jsx';
import ServiceManagement from './Service/ServiceManagement.jsx';

function App() {
    return (
        <BrowserRouter>

            <NavigationBar />

            <Routes>
                {/* Existing group routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/employee/dashboard"
                    element={<EmployeeDashboard />}
                />

                {/* Service routes */}
                <Route
                    path="/services"
                    element={<ServiceCatalogue />}
                />

                <Route
                    path="/service-management"
                    element={<ServiceManagement />}
                />
            </Routes>

            <Footer />

        </BrowserRouter>
    );
}

export default App;