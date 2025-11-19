import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UserLayout, AdminLayout } from './components/Layouts';
import UserBookingPage from './pages/UserBooking';
import UserPaymentPage from './pages/UserPayment';
import AdminDashboardPage from './pages/admin/DashboardPage';
import AdminBookingManagementPage from './pages/admin/BookingManagementPage';
import AdminSettingsPage from './pages/admin/SettingsPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<UserLayout><UserBookingPage /></UserLayout>} />
        <Route path="/payment" element={<UserLayout><UserPaymentPage /></UserLayout>} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout><AdminDashboardPage /></AdminLayout>} />
        <Route path="/admin/bookings" element={<AdminLayout><AdminBookingManagementPage /></AdminLayout>} />
        <Route path="/admin/settings" element={<AdminLayout><AdminSettingsPage /></AdminLayout>} />
        
        {/* Fallback */}
        <Route path="/admin/*" element={<Navigate to="/admin" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;