import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Hexagon, Menu, X, LogIn } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const location = useLocation()
  const { user, userType } = useAuth()

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="bg-slate-800 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-yellow-500 p-2 rounded-lg relative">
              <Hexagon className="h-6 w-6 text-slate-800 fill-current" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
              </div>
            </div>
            <span className="text-2xl font-bold text-white">WorkBee</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {!user ? (
              <>
                <Link
                  to="/"
                  className={`text-gray-300 hover:text-yellow-500 px-3 py-2 text-sm font-medium transition-colors ${
                    isActive('/') ? 'text-yellow-500 border-b-2 border-yellow-500' : ''
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/register-business"
                  className={`text-gray-300 hover:text-yellow-500 px-3 py-2 text-sm font-medium transition-colors ${
                    isActive('/register-business') ? 'text-yellow-500 border-b-2 border-yellow-500' : ''
                  }`}
                >
                  For Businesses
                </Link>
                <Link
                  to="/register-worker"
                  className={`text-gray-300 hover:text-yellow-500 px-3 py-2 text-sm font-medium transition-colors ${
                    isActive('/register-worker') ? 'text-yellow-500 border-b-2 border-yellow-500' : ''
                  }`}
                >
                  For Workers
                </Link>
                <Link
                  to="/login"
                  className="bg-yellow-500 text-slate-900 px-4 py-2 rounded-lg font-medium hover:bg-orange-400 transition-colors inline-flex items-center"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Sign In
                </Link>
              </>
            ) : (
              <Link
                to={userType === 'business' ? '/business-dashboard' : '/worker-dashboard'}
                className="bg-yellow-500 text-slate-900 px-4 py-2 rounded-lg font-medium hover:bg-orange-400 transition-colors"
              >
                Dashboard
              </Link>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-yellow-500 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 border-t border-slate-700">
              {!user ? (
                <>
                  <Link
                    to="/"
                    className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-yellow-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/register-business"
                    className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-yellow-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    For Businesses
                  </Link>
                  <Link
                    to="/register-worker"
                    className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-yellow-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    For Workers
                  </Link>
                  <Link
                    to="/login"
                    className="block px-3 py-2 text-base font-medium text-yellow-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                </>
              ) : (
                <Link
                  to={userType === 'business' ? '/business-dashboard' : '/worker-dashboard'}
                  className="block px-3 py-2 text-base font-medium text-yellow-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header