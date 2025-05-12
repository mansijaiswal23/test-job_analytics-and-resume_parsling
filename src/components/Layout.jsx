
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

/**
 * @typedef {Object} LayoutProps
 * @property {React.ReactNode} children
 */

/**
 * @param {LayoutProps} props
 */
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-navy-700 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">JobTracker Pro</h1>
          <nav className="space-x-2">
            <NavLink to="/login" className={({ isActive }) => 
              cn("px-4 py-2 rounded hover:bg-navy-600 transition", 
                 isActive ? "bg-navy-600" : "")}>
              Login
            </NavLink>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      
      <footer className="bg-navy-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          &copy; {new Date().getFullYear()} JobTracker Pro. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
