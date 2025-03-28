import React, { useState } from 'react';
import { PlusIcon, ChartBarIcon, FileText } from 'lucide-react';
import Modal from '../components/ui/Modal';

const Dashboard: React.FC = () => {
  const [showAllTips, setShowAllTips] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<'create' | 'ats' | 'upload' | null>(null);
  return (
    <div className="flex-1 bg-white">
      {/* Main Content */}
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back [Name], let's get started!</h1>
          <p className="text-gray-600">
            We've created a few templates to help you get started.
            You can also upload your own resume or create a new one from scratch.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Create New Resume */}
          <div 
            className="bg-blue-50 p-8 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-100 transition-colors"
            onClick={() => {
              setModalContent('create');
              setModalOpen(true);
            }}
          >
            <div className="mb-4 w-20 h-20 flex items-center justify-center">
              <div className="w-16 h-16 border border-blue-300 rounded-lg flex items-center justify-center">
                <PlusIcon className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Create new resume</h3>
          </div>

          {/* View ATS Score */}
          <div 
            className="bg-blue-50 p-8 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-100 transition-colors"
            onClick={() => {
              setModalContent('ats');
              setModalOpen(true);
            }}
          >
            <div className="mb-4 w-20 h-20 flex items-center justify-center">
              <div className="w-16 h-16 border border-blue-300 rounded-lg flex items-center justify-center relative">
                <FileText className="h-8 w-8 text-blue-600" />
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center">
                  92%
                </div>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">View my ATS score</h3>
          </div>

          {/* Upload Resume */}
          <div 
            className="bg-blue-50 p-8 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-100 transition-colors"
            onClick={() => {
              setModalContent('upload');
              setModalOpen(true);
            }}
          >
            <div className="mb-4 w-20 h-20 flex items-center justify-center">
              <div className="w-16 h-16 border border-blue-300 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Upload your resume</h3>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Recent Activity</h2>
            <a href="#" className="text-blue-600 text-sm font-medium hover:text-blue-800">View All</a>
          </div>

          <div className="bg-white border rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-center h-40 border-2 border-dashed border-gray-300 rounded-lg">
              <div className="text-center">
                <ChartBarIcon className="mx-auto h-10 w-10 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">No recent activity</p>
                <p className="text-xs text-gray-500">Create or edit a resume to see activity here</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Resume Building Tips</h2>
          
          <div className="bg-white border rounded-lg shadow-sm">
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Use job-specific keywords</h4>
                    <p className="text-sm text-gray-600">Include relevant keywords from the job description to improve matching.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Optimize your resume format</h4>
                    <p className="text-sm text-gray-600">Use a clean, simple format with standard section headings that ATS can easily parse.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Quantify achievements</h4>
                    <p className="text-sm text-gray-600">Use specific numbers and metrics to illustrate your accomplishments.</p>
                  </div>
                </div>

                {showAllTips && (
                  <>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Be concise and focused</h4>
                        <p className="text-sm text-gray-600">Keep your resume to 1-2 pages with concise bullet points highlighting your most relevant experience.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Tailor your resume for each job</h4>
                        <p className="text-sm text-gray-600">Customize your resume to match each specific job application rather than using a generic version.</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              <button 
                className="mt-6 text-blue-600 text-sm font-medium hover:text-blue-800"
                onClick={() => setShowAllTips(!showAllTips)}
              >
                {showAllTips ? 'Show less' : 'See all tips'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal 
        isOpen={modalOpen} 
        onClose={() => {
          setModalOpen(false);
          setModalContent(null);
        }}
        title={
          modalContent === 'create' ? 'Create New Resume' : 
          modalContent === 'ats' ? 'ATS Score Analysis' : 
          modalContent === 'upload' ? 'Upload Your Resume' : ''
        }
        size="lg"
      >
        {modalContent === 'create' && (
          <div>
            <p className="mb-4 text-gray-600">Create a new resume using our AI-powered resume builder.</p>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Resume Title</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. Software Engineer Resume"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. Software Engineer"
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={() => setModalOpen(false)}
              >
                Continue
              </button>
            </div>
          </div>
        )}
        
        {modalContent === 'ats' && (
          <div>
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-800 mb-2">About ATS Score</h4>
              <p className="text-sm text-blue-600">
                An ATS (Applicant Tracking System) score indicates how well your resume would perform when scanned by automated resume screening software. A higher score means better chances of getting past the initial screening.
              </p>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium text-gray-800">Your Overall ATS Score</h4>
                <span className="text-lg font-bold text-green-600">92/100</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-green-500 h-3 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h5 className="font-medium text-gray-700">Format Compatibility</h5>
                  <span className="font-medium text-green-600">96/100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '96%' }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Your resume format is highly compatible with ATS systems.</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h5 className="font-medium text-gray-700">Keyword Optimization</h5>
                  <span className="font-medium text-yellow-600">85/100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Your resume includes most of the important keywords but could be improved.</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h5 className="font-medium text-gray-700">Skills Matching</h5>
                  <span className="font-medium text-green-600">94/100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Your skills are well matched to the target job market.</p>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={() => setModalOpen(false)}
              >
                View Detailed Analysis
              </button>
            </div>
          </div>
        )}
        
        {modalContent === 'upload' && (
          <div>
            <p className="mb-4 text-gray-600">Upload your existing resume to analyze and optimize it.</p>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-6">
              <div className="flex flex-col items-center justify-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <h4 className="font-medium text-gray-800 mb-2">Drop your file here</h4>
                <p className="text-sm text-gray-500 mb-4">Support for PDF, DOCX (Max. 5MB)</p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Browse Files
                </button>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-gray-300 text-gray-500 rounded-md cursor-not-allowed"
                disabled
              >
                Upload & Analyze
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Dashboard; 