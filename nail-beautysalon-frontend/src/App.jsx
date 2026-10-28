import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavigationBar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BookAppointment from './pages/Appointment';
import EmployeeDashboard from './pages/EmployeeDashboard';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import ServiceCatalogue from './pages/ServiceCatalogue.jsx';
import ServiceManagement from './pages/ServiceManagement.jsx';

function App() {
    return (
        <AuthProvider>
        <BrowserRouter>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                
                {/* Added Admin and Customer routes so redirects don't break */}
                <Route path="/admin" element={<EmployeeDashboard />} />
                <Route path="/customer/dashboard" element={<EmployeeDashboard />} />
                <Route path="/employee/dashboard" element={<EmployeeDashboard />}/>
                
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/products" element={<Product />}/>
                <Route path="/services" element={<ServiceCatalogue />}/>
                <Route path="/appointment" element={<BookAppointment />}/>
                <Route path="/service-management" element={<ServiceManagement />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
        </AuthProvider>
    );
}

export default App;