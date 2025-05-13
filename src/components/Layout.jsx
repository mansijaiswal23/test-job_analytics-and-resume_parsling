import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
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
    <div className="min-h-screen flex flex-col font-[Indie_Flower] bg-gradient-to-b from-pink-50 to-rose-100 overflow-hidden">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 60 }}
        className="bg-rose-500 text-black py-1 mb-3 shadow-md"
      >
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 space-y-2 sm:space-y-0">
          <h1 className="text-3xl font-bold tracking-wider">
            JobTracker Pro
          </h1>
          <nav>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                cn(
                  'px-5 py-2 rounded-full font-semibold transition-all duration-300 shadow',
                  // Explicitly set both bg & text for *all* states:
                  isActive
                    ? 'bg-red-500 text-white border border-red-500'
                    : 'bg-white text-black border border-gray-300 hover:bg-gray-100'
                )
              }
            >
              Login
            </NavLink>
          </nav>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4 text-red-500 animate-fade-in">
        {children}
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-rose-600 text-white py-4 mt-8 shadow-inner"
      >
        <div className="container mx-auto px-4 text-center text-sm">
          &copy; {new Date().getFullYear()} JobTracker Pro. All rights reserved.
        </div>
      </motion.footer>
    </div>
  );
};

export default Layout;
