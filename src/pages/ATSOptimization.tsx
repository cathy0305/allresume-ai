import React, { useState } from 'react';
import { PlusIcon, CheckIcon } from 'lucide-react';
import Modal from '../components/ui/Modal';
import DownloadModal from '../components/ui/DownloadModal';
import AlertModal from '../components/ui/AlertModal';

const ATSOptimization: React.FC = () => {
  const [selectedResume, setSelectedResume] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<'preview' | 'edit' | 'create' | null>(null);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [alertModalOpen, setAlertModalOpen] = useState(false);

  // Sample data for resumes
  const resumes = [
    {
      id: 1,
      title: "Software Engineer Resume",
      lastUpdated: "2 days ago",
      atsScore: 92,
      template: "Professional"
    },
    {
      id: 2,
      title: "UX Designer Resume",
      lastUpdated: "1 week ago",
      atsScore: 85,
      template: "Creative"
    }
  ];

  // ATS optimization tips
  const tips = [
    {
      id: 1,
      title: "Use job-specific keywords",
      description: "Include relevant keywords from the job description to improve matching."
    },
    {
      id: 2,
      title: "Optimize your resume format",
      description: "Use a clean, simple format with standard section headings that ATS can easily parse."
    },
    {
      id: 3,
      title: "Quantify achievements",
      description: "Use specific numbers and metrics to illustrate your accomplishments."
    }
  ];

  return (
    <div className="flex-1 bg-white">
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">ATS Optimization</h1>
          <p className="text-gray-600">Optimize your resume with our ATS checker to get hired fast.</p>
        </div>

        {/* Actions Header */}
        <div className="flex justify-between items-center mb-6">
          <div></div>
          <a href="#" className="text-blue-600 text-sm font-medium hover:text-blue-800">View All</a>
        </div>

        {/* Resumes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Resume Cards */}
          {resumes.map((resume) => (
            <div 
              key={resume.id} 
              className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
                selectedResume === resume.id ? 'ring-2 ring-blue-500' : 'hover:shadow-md'
              }`}
              onClick={() => setSelectedResume(resume.id)}
            >
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-1">{resume.title}</h3>
                <p className="text-sm text-gray-500 mb-4">Updated {resume.lastUpdated}</p>
                <p className="text-sm text-gray-600 mb-2">Template: {resume.template}</p>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">ATS Score</span>
                    <span className={`text-sm font-medium ${
                      resume.atsScore >= 90 ? 'text-green-600' : 
                      resume.atsScore >= 70 ? 'text-yellow-600' : 
                      'text-red-600'
                    }`}>{resume.atsScore}/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        resume.atsScore >= 90 ? 'bg-green-500' : 
                        resume.atsScore >= 70 ? 'bg-yellow-500' : 
                        'bg-red-500'
                      }`} 
                      style={{ width: `${resume.atsScore}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button 
                    className="flex-1 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded text-sm font-medium hover:bg-gray-50"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedResume(resume.id);
                      setModalContent('preview');
                      setModalOpen(true);
                    }}
                  >
                    Preview
                  </button>
                  <button 
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded text-sm font-medium hover:bg-blue-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedResume(resume.id);
                      setModalContent('edit');
                      setModalOpen(true);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Create New Resume Card */}
          <div 
            className="border border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => {
              setModalContent('create');
              setModalOpen(true);
            }}
          >
            <div className="w-12 h-12 flex items-center justify-center mb-4">
              <PlusIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Create New Resume</h3>
          </div>
        </div>

        {/* Tips Section */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-6">Tips</h2>
          <p className="text-gray-600 mb-6">Follow these tips to increase your chances of getting past applicant tracking systems.</p>
          
          <div className="bg-white border rounded-lg">
            <div className="p-6">
              <div className="space-y-6">
                {tips.map((tip) => (
                  <div className="flex items-start" key={tip.id}>
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                      <CheckIcon className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{tip.title}</h4>
                      <p className="text-sm text-gray-600">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
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
          modalContent === 'preview' ? 'Resume Preview' :
          modalContent === 'edit' ? 'Edit Resume' :
          modalContent === 'create' ? 'Create New Resume' : ''
        }
        size={modalContent === 'preview' ? 'xl' : modalContent === 'edit' ? 'xl' : 'lg'}
      >
        {modalContent === 'preview' && selectedResume && (
          <div>
            <div className="bg-white p-4 border rounded-md mb-6">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
                  <p className="text-gray-600">Software Engineer</p>
                  <div className="mt-2 text-sm text-gray-500">
                    <p>johndoe@example.com | (123) 456-7890</p>
                    <p>San Francisco, CA</p>
                  </div>
                </div>
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="font-bold text-xl">JD</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 border-b pb-2">Professional Summary</h3>
                <p className="mt-2 text-gray-700">
                  Experienced software engineer with 5+ years of expertise in developing robust web applications using modern technologies. Passionate about creating efficient, scalable solutions and improving user experiences.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 border-b pb-2">Work Experience</h3>
                <div className="mt-3">
                  <h4 className="font-bold text-gray-800">Senior Software Engineer</h4>
                  <p className="text-gray-600">Tech Company Inc. | Jan 2020 - Present</p>
                  <ul className="list-disc pl-5 mt-2 text-gray-700">
                    <li>Developed and maintained enterprise web applications using React and Node.js</li>
                    <li>Implemented CI/CD pipelines resulting in 40% faster deployment times</li>
                    <li>Led a team of 5 developers to successfully launch 3 major product features</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 border-b pb-2">Skills</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">HTML/CSS</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Git</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">AWS</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={() => {
                  setModalContent('edit');
                }}
              >
                Edit Resume
              </button>
            </div>
          </div>
        )}
        
        {modalContent === 'edit' && selectedResume && (
          <div>
            <div className="flex gap-6">
              <div className="flex-1">
                <div className="bg-white p-4 border rounded-md h-[32rem] overflow-auto">
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Personal Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                          type="text"
                          value="John Doe"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                        <input
                          type="text"
                          value="Software Engineer"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          value="johndoe@example.com"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input
                          type="text"
                          value="(123) 456-7890"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Professional Summary</h3>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                      value="Experienced software engineer with 5+ years of expertise in developing robust web applications using modern technologies. Passionate about creating efficient, scalable solutions and improving user experiences."
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-bold text-gray-800">Work Experience</h3>
                      <button className="text-sm text-blue-600 hover:text-blue-800">+ Add Experience</button>
                    </div>
                    
                    <div className="border rounded-md p-4 mb-3">
                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                          <input
                            type="text"
                            value="Senior Software Engineer"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                          <input
                            type="text"
                            value="Tech Company Inc."
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                          value="- Developed and maintained enterprise web applications using React and Node.js
- Implemented CI/CD pipelines resulting in 40% faster deployment times
- Led a team of 5 developers to successfully launch 3 major product features"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-bold text-gray-800">Skills</h3>
                      <button className="text-sm text-blue-600 hover:text-blue-800">+ Add Skill</button>
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center">
                          JavaScript
                          <button className="ml-1 text-gray-500 hover:text-gray-700">×</button>
                        </span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center">
                          React
                          <button className="ml-1 text-gray-500 hover:text-gray-700">×</button>
                        </span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center">
                          Node.js
                          <button className="ml-1 text-gray-500 hover:text-gray-700">×</button>
                        </span>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="text"
                          placeholder="Add a skill..."
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="ml-2 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-72">
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <h4 className="font-medium text-blue-800 mb-2">ATS Optimization Tips</h4>
                  <ul className="text-sm text-blue-600 space-y-2">
                    <li className="flex items-start">
                      <CheckIcon className="h-4 w-4 mr-1 mt-0.5 text-green-500" />
                      <span>Your resume format is ATS-friendly</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-4 w-4 mr-1 mt-0.5 text-green-500" />
                      <span>Skills section contains relevant keywords</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 mt-0.5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Consider adding more quantifiable achievements</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Current ATS Score</h4>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">Overall Score</span>
                    <span className="text-sm font-medium text-green-600">92/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                  <button className="text-sm text-blue-600 hover:text-blue-800">
                    View Detailed Analysis
                  </button>
                </div>
                
                <div className="pt-4 border-t">
                  <button
                    className="w-full mb-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    onClick={() => setModalOpen(false)}
                  >
                    Save Changes
                  </button>
                  <button
                    className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                    onClick={() => setModalOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
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
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Choose a Template</label>
                <div className="grid grid-cols-3 gap-3">
                  <div className="border border-blue-500 bg-blue-50 p-2 rounded-md text-center cursor-pointer">
                    <p className="text-sm font-medium text-blue-600">Professional</p>
                  </div>
                  <div className="border border-gray-300 p-2 rounded-md text-center cursor-pointer hover:bg-gray-50">
                    <p className="text-sm font-medium text-gray-700">Modern</p>
                  </div>
                  <div className="border border-gray-300 p-2 rounded-md text-center cursor-pointer hover:bg-gray-50">
                    <p className="text-sm font-medium text-gray-700">Creative</p>
                  </div>
                </div>
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
      </Modal>
      
      {/* Download Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
        onDownload={(format) => {
          console.log(`Downloading resume in ${format} format`);
          // Here you would implement the actual download functionality
          setDownloadModalOpen(false);
        }}
      />
      
      {/* Alert Modal for ATS Analysis */}
      <AlertModal
        isOpen={alertModalOpen}
        onClose={() => setAlertModalOpen(false)}
        title="ATS Analysis"
        message="Your resume has been analyzed against the most common ATS systems. It scored 92/100, which is excellent! Key strengths include relevant keywords, proper formatting, and quantifiable achievements."
        confirmText="Got it"
        showCancel={false}
        type="success"
      />
    </div>
  );
};

export default ATSOptimization;