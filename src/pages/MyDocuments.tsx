import React, { useState } from 'react';
import { PlusIcon } from 'lucide-react';
import Modal from '../components/ui/Modal';

const MyDocuments: React.FC = () => {
  const [selectedResume, setSelectedResume] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<'create' | 'preview' | null>(null);
  // Sample data for resumes
  const resumes = [
    {
      id: 1,
      title: "Resume 1",
      lastUpdated: "2 days ago",
      atsScore: 92,
      template: "Professional",
      thumbnail: "/path/to/thumbnail1.jpg"
    },
    {
      id: 2,
      title: "Resume 2",
      lastUpdated: "1 week ago",
      atsScore: 85,
      template: "Creative",
      thumbnail: "/path/to/thumbnail2.jpg"
    },
    {
      id: 3,
      title: "Resume 3",
      lastUpdated: "2 weeks ago",
      atsScore: 78,
      template: "Modern",
      thumbnail: "/path/to/thumbnail3.jpg"
    },
    {
      id: 4,
      title: "Resume 4",
      lastUpdated: "1 month ago",
      atsScore: 90,
      template: "Simple",
      thumbnail: "/path/to/thumbnail4.jpg"
    }
  ];

  return (
    <div className="flex-1 bg-white">
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Documents</h1>
          <p className="text-gray-600">Manage your resumes with AllResume.ai.</p>
        </div>

        {/* Tabs */}
        <div className="mb-8 border-b">
          <ul className="flex">
            <li className="mr-2">
              <a 
                href="#" 
                className="inline-block px-4 py-2 text-blue-600 border-b-2 border-blue-600 font-medium"
                aria-current="page"
              >
                Resumes
              </a>
            </li>
          </ul>
        </div>

        {/* Resume Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Create New Resume Card */}
          <div 
            className="bg-blue-50 rounded-lg p-6 flex flex-col items-center justify-center text-center h-64 cursor-pointer hover:bg-blue-100 transition-colors"
            onClick={() => {
              setModalContent('create');
              setModalOpen(true);
            }}
          >
            <div className="w-16 h-16 border border-blue-300 rounded-lg flex items-center justify-center mb-4">
              <PlusIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Create New Resume</h3>
          </div>

          {/* Resume Cards */}
          {resumes.map((resume) => (
            <div 
              key={resume.id} 
              className={`bg-gray-200 rounded-lg overflow-hidden flex flex-col h-64 cursor-pointer transition-all ${
                selectedResume === resume.id ? 'ring-2 ring-blue-500' : 'hover:shadow-md'
              }`}
              onClick={() => setSelectedResume(resume.id)}
              onDoubleClick={() => {
                setSelectedResume(resume.id);
                setModalContent('preview');
                setModalOpen(true);
              }}
            >
              {/* This would be an image in the final version */}
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">{resume.title} Preview</span>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-medium text-gray-800">{resume.title}</h3>
              </div>
            </div>
          ))}
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
          modalContent === 'preview' ? 'Resume Preview' : ''
        }
        size={modalContent === 'preview' ? 'xl' : 'md'}
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
              <div className="space-x-2">
                <button
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Download PDF
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Edit Resume
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MyDocuments;