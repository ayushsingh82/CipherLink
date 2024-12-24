import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link 
              to="/" 
              className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Home
            </Link>
            <Link 
              to="/wallet" 
              className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Wallet
            </Link>
            <Link 
              to="/identity" 
              className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Identity
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 