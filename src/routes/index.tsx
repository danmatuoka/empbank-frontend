import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from '../pages/Dashboard';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default RoutesMain;
