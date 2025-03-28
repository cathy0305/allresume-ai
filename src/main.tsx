import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';
import MyDocuments from './pages/MyDocuments';
import Templates from './pages/Templates';
import ATSOptimization from './pages/ATSOptimization';
import "./index.css"; // CSS 파일 로드 추가
import ReactDOM from "react-dom/client";

type ActivePage = 'dashboard' | 'documents' | 'ats' | 'templates';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<ActivePage>('dashboard');
  
  // 페이지 렌더링 함수
  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'documents':
        return <MyDocuments />;
      case 'ats':
        return <ATSOptimization />;
      case 'templates':
        return <Templates />;
      default:
        return <Dashboard />;
    }
  };
  
  // 네비게이션 핸들러
  const handleNavigation = (page: ActivePage) => {
    setActivePage(page);
  };
  
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar activePage={activePage} onNavigate={handleNavigation} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          {/* ... */}
        </header>
        
        {/* Content */}
        <main className="flex-1 overflow-y-auto">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found. Check if index.html has a <div id='root'></div>");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
