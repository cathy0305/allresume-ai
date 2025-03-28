import React from 'react';
import { Edit2, Eye, MoreVertical } from 'lucide-react';

interface ResumeCardProps {
  title: string;
  lastUpdated: string;
  atsScore: number;
  template: string;
  onClick?: () => void;
  isSelected?: boolean;
}

const ResumeCard: React.FC<ResumeCardProps> = ({
  title,
  lastUpdated,
  atsScore,
  template,
  onClick,
  isSelected = false
}) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-sm border overflow-hidden 
                ${isSelected ? 'ring-2 ring-blue-500' : ''}
                ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <div className="flex">
            <button className="text-gray-400 hover:text-gray-600 mr-2">
              <Edit2 className="h-5 w-5" />
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Updated {lastUpdated}
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <span className="text-sm font-medium text-gray-700 mr-2">Template:</span>
            <span className="text-sm text-gray-600">{template}</span>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-700">ATS Score</span>
            <span className={`text-sm font-medium ${
              atsScore >= 90 ? 'text-green-600' : 
              atsScore >= 70 ? 'text-yellow-600' : 
              'text-red-600'
            }`}>{atsScore}/100</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${
                atsScore >= 90 ? 'bg-green-500' : 
                atsScore >= 70 ? 'bg-yellow-500' : 
                'bg-red-500'
              }`} 
              style={{ width: `${atsScore}%` }}
            ></div>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button className="flex-1 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded text-sm font-medium hover:bg-gray-50">
            <div className="flex items-center justify-center">
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </div>
          </button>
          <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded text-sm font-medium hover:bg-blue-700">
            <div className="flex items-center justify-center">
              <Edit2 className="h-4 w-4 mr-2" />
              Edit
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;