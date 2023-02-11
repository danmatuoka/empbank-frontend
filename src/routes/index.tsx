import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/Login';

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default RoutesMain;
