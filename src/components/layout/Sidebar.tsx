import React from 'react';
import { 
  Home, 
  FileText, 
  BarChart2, 
  Layout, 
  User
} from 'lucide-react';

interface SidebarProps {
  activePage: 'dashboard' | 'documents' | 'ats' | 'templates';
  onNavigate: (page: 'dashboard' | 'documents' | 'ats' | 'templates') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, onNavigate }) => {
  return (
    <div className="w-64 bg-white border-r shadow-sm h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center mb-8">
          <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">A</span>
          </div>
          <h1 className="ml-2 text-xl font-bold text-gray-800">AllResume.ai</h1>
        </div>
      </div>
      
      {/* Account Info */}
      <div className="px-6 mb-6">
        <p className="text-sm font-medium text-gray-500 mb-2">My account</p>
        <div className="flex items-center">
          <div className="h-10 w-10 bg-purple-500 rounded-full flex items-center justify-center">
            <User className="h-5 w-5 text-white" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-800">Cathy Joo</p>
            <p className="text-xs text-blue-600 cursor-pointer">View Profile</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="px-4 flex-1">
        <p className="text-sm font-medium text-gray-500 mb-2 px-2">Menu</p>
        <nav className="space-y-1">
          <a 
            href="#" 
            className={`flex items-center px-2 py-2 text-sm rounded-lg ${
              activePage === 'dashboard' 
                ? 'bg-blue-50 text-blue-600 font-medium' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={(e) => {
              e.preventDefault();
              onNavigate('dashboard');
            }}
          >
            <Home className={`mr-3 h-5 w-5 ${activePage === 'dashboard' ? 'text-blue-600' : 'text-gray-400'}`} />
            Dashboard
          </a>
          
          <a 
            href="#" 
            className={`flex items-center px-2 py-2 text-sm rounded-lg ${
              activePage === 'documents' 
                ? 'bg-blue-50 text-blue-600 font-medium' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={(e) => {
              e.preventDefault();
              onNavigate('documents');
            }}
          >
            <FileText className={`mr-3 h-5 w-5 ${activePage === 'documents' ? 'text-blue-600' : 'text-gray-400'}`} />
            My Documents
          </a>
          
          <a 
            href="#" 
            className={`flex items-center px-2 py-2 text-sm rounded-lg ${
              activePage === 'ats' 
                ? 'bg-blue-50 text-blue-600 font-medium' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={(e) => {
              e.preventDefault();
              onNavigate('ats');
            }}
          >
            <BarChart2 className={`mr-3 h-5 w-5 ${activePage === 'ats' ? 'text-blue-600' : 'text-gray-400'}`} />
            ATS Optimization
          </a>
          
          <a 
            href="#" 
            className={`flex items-center px-2 py-2 text-sm rounded-lg ${
              activePage === 'templates' 
                ? 'bg-blue-50 text-blue-600 font-medium' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={(e) => {
              e.preventDefault();
              onNavigate('templates');
            }}
          >
            <Layout className={`mr-3 h-5 w-5 ${activePage === 'templates' ? 'text-blue-600' : 'text-gray-400'}`} />
            Templates
          </a>
        </nav>
      </div>
      
      {/* Upgrade Plan Section */}
      <div className="p-6 border-t">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-medium text-blue-800 mb-1">Upgrade to Pro</h3>
          <p className="text-sm text-blue-600 mb-3">Get advanced ATS features</p>
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded font-medium text-sm hover:bg-blue-700">
            View Plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;