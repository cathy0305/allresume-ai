import React, { useState } from 'react';
import Modal from './Modal';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: (format: 'pdf' | 'docx') => void;
}

const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose,
  onDownload
}) => {
  const [selectedFormat, setSelectedFormat] = useState<'pdf' | 'docx'>('pdf');

  const handleDownload = () => {
    onDownload(selectedFormat);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Download Resume"
      size="md"
    >
      <div>
        <p className="mb-4 text-gray-600">Choose your preferred format</p>
        
        <div className="space-y-3 mb-6">
          <div 
            className={`border rounded-md p-4 flex items-center cursor-pointer ${
              selectedFormat === 'pdf' ? 'bg-blue-50 border-blue-500' : 'hover:bg-gray-50'
            }`}
            onClick={() => setSelectedFormat('pdf')}
          >
            <div className={`h-5 w-5 border rounded-full flex items-center justify-center mr-3 ${
              selectedFormat === 'pdf' ? 'border-blue-600' : 'border-gray-300'
            }`}>
              {selectedFormat === 'pdf' && (
                <div className="h-3 w-3 bg-blue-600 rounded-full"></div>
              )}
            </div>
            <div>
              <div className="font-medium">PDF</div>
              <div className="text-sm text-gray-500">Best for sharing and printing</div>
            </div>
          </div>
          
          <div 
            className={`border rounded-md p-4 flex items-center cursor-pointer ${
              selectedFormat === 'docx' ? 'bg-blue-50 border-blue-500' : 'hover:bg-gray-50'
            }`}
            onClick={() => setSelectedFormat('docx')}
          >
            <div className={`h-5 w-5 border rounded-full flex items-center justify-center mr-3 ${
              selectedFormat === 'docx' ? 'border-blue-600' : 'border-gray-300'
            }`}>
              {selectedFormat === 'docx' && (
                <div className="h-3 w-3 bg-blue-600 rounded-full"></div>
              )}
            </div>
            <div>
              <div className="font-medium">Word Document (DOCX)</div>
              <div className="text-sm text-gray-500">Editable format for Microsoft Word</div>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button
            className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded font-medium hover:bg-gray-300"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded font-medium hover:bg-blue-700"
            onClick={handleDownload}
          >
            Confirm
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DownloadModal;
