import React from 'react';

interface TabItem {
  id: string;
  label: string;
}

interface TabNavigationProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (tabId: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  activeTab,
  onChange
}) => {
  return (
    <div className="border-b mb-6">
      <ul className="flex flex-wrap -mb-px">
        {tabs.map((tab) => (
          <li className="mr-2" key={tab.id}>
            <button
              className={`inline-block px-4 py-2 font-medium border-b-2 ${
                activeTab === tab.id
                  ? 'text-blue-600 border-blue-600'
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => onChange(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabNavigation;