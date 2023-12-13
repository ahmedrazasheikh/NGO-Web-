import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact_us from './Pages/Contact-us/Contact-us';
import Achieved_Projects from './Pages/Achieved_Projects/Achieved_Projects';
import Active_Projects from './Pages/Active_Projects/Active_Projects';
import DetailPage from './Components/Detail_Page/Detail_Page';
import Detail_Complete from './Components/Detail_Page/Detail_Complete/Detail_Complete';
import Nested_Active_Project from './Pages/Nested_Active_Project/Nested_Active_Project';
import Nested_Acheived_Project from './Pages/Nested_Acheived_Projects/Nested_Acheived_Projects';
import Dashboard from './Components/Dashboard/Dashboard';
import Payment from './Components/Payment/Payment';
import Login from './Components/Dashboard/LoginPage/Login';
import { AuthProvider, useAuth } from './Components/Dashboard/ProtectedRoute/AuthContext';

const AuthenticatedRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact_us" element={<Contact_us />} />
          <Route path="/Achieved-Projects" element={<Achieved_Projects />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/Active_Projects" element={<Active_Projects />} />
          <Route path="/Detail-Completed" element={<Detail_Complete />} />
          <Route path="/Nested_Active_Project" element={<Nested_Active_Project />} />
          <Route path="/Achieved-Projects/SubCategory" element={<Nested_Acheived_Project />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
