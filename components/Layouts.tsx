import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// --- User Layout ---
export const UserLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
      <header className="sticky top-0 z-50 w-full border-b border-border-light dark:border-border-dark bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="size-8 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold leading-tight tracking-tight">Badminton Bookings</h2>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="/payment" className="text-sm font-medium hover:text-primary transition-colors">My Bookings</Link>
            <Link to="#" className="text-sm font-medium hover:text-primary transition-colors">Profile</Link>
            <Link to="#" className="text-sm font-medium hover:text-primary transition-colors">Contact Us</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/admin" className="hidden md:block text-xs font-bold uppercase tracking-wider text-subtle hover:text-primary">
               Admin View
            </Link>
            <button className="hidden md:flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-slate-900 text-sm font-bold hover:opacity-90 transition-opacity">
              Log Out
            </button>
            <div className="size-10 rounded-full bg-gray-200 bg-cover bg-center border border-border-light" style={{ backgroundImage: 'url("https://picsum.photos/100/100")' }}></div>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
};

// --- Admin Layout ---
export const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: 'dashboard' },
    { name: 'Bookings', path: '/admin/bookings', icon: 'calendar_month' },
    { name: 'Members', path: '/admin/members', icon: 'group' }, // Placeholder
    { name: 'Reports', path: '/admin/reports', icon: 'bar_chart' }, // Placeholder
    { name: 'Settings', path: '/admin/settings', icon: 'settings' },
  ];

  return (
    <div className="flex min-h-screen w-full bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
      <aside className="flex w-64 flex-col border-r border-border-light dark:border-border-dark bg-white dark:bg-surface-dark p-4 sticky top-0 h-screen">
        <div className="flex items-center gap-3 px-2 mb-8 mt-2">
          <div className="text-primary">
            <span className="material-symbols-outlined !text-3xl">sports_tennis</span>
          </div>
          <div>
            <h1 className="text-lg font-bold">CourtAdmin</h1>
            <p className="text-xs text-subtle">Super Badminton Club</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive(item.path)
                  ? 'bg-primary/10 text-primary-dark dark:text-primary font-medium'
                  : 'text-slate-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span className={`material-symbols-outlined ${isActive(item.path) ? 'fill' : ''}`}>
                {item.icon}
              </span>
              <span className="text-sm">{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="border-t border-border-light dark:border-border-dark pt-4 mt-auto">
          <div className="flex items-center gap-3 mb-4 px-2">
            <div className="size-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://picsum.photos/100/100?random=2")' }}></div>
            <div className="flex flex-col overflow-hidden">
              <p className="text-sm font-medium truncate">Admin Name</p>
              <p className="text-xs text-subtle truncate">Administrator</p>
            </div>
          </div>
          <button 
            onClick={() => navigate('/')}
            className="flex w-full items-center gap-3 px-3 py-2 text-slate-600 dark:text-gray-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="text-sm font-medium">Logout to User</span>
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
};