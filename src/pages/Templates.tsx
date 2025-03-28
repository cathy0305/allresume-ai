import React, { useState } from 'react';
import Modal from '../components/ui/Modal';
import AlertModal from '../components/ui/AlertModal';
import templateData from '../data/templateData';
import Templates, { TemplateKey } from '../components/templates';

const TemplatesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('General');
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [primaryColor, setPrimaryColor] = useState('#636AE8'); // Default primary color
  
  // Get unique categories from template data
  const categories = Array.from(new Set(templateData.map(tpl => tpl.category)));
  
  // Filter templates by active category
  const filteredTemplates = templateData.filter(
    template => template.category === activeCategory
  );

  return (
    <div className="flex-1 bg-white">
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Templates</h1>
        </div>

        {/* Category Tabs */}
        <div className="mb-8 border-b">
          <ul className="flex flex-wrap">
            {categories.map((category) => (
              <li className="mr-2" key={category}>
                <button
                  className={`inline-block px-4 py-2 font-medium ${
                    activeCategory === category 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTemplates.map((template) => (
            <div 
              key={template.id} 
              className={`rounded-lg overflow-hidden border cursor-pointer transition-all ${
                selectedTemplate === template.id ? 'ring-2 ring-blue-500' : 'hover:shadow-md'
              }`}
              onClick={() => setSelectedTemplate(template.id)}
              onDoubleClick={() => {
                setSelectedTemplate(template.id);
                setModalOpen(true);
              }}
            >
              {/* This would be an actual image in the final version */}
              <div className="h-80 bg-gray-200 flex items-center justify-center">
                {/* If we had image previews, we would use them here */}
                <div 
                  className="w-full h-full p-1 flex items-center justify-center bg-white"
                  style={{ transform: 'scale(0.5)' }}
                >
                  {/* Render mini preview of the template */}
                  {template.component in Templates && 
                    React.createElement(
                      Templates[template.component as TemplateKey] as any,
                      { preview: true }
                    )
                  }
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-center text-gray-800">{template.name}</h3>
              </div>
            </div>
          ))}
        </div>
        
        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No templates available for this category yet.</p>
          </div>
        )}
      </div>
      
      {/* Template Preview Modal */}
      <Modal
        isOpen={modalOpen && selectedTemplate !== null}
        onClose={() => setModalOpen(false)}
        title="Template Preview"
        size="xl"
      >
        {selectedTemplate && (
          <div>
            <div className="flex gap-6">
              <div className="flex-1 border rounded">
                {/* Render the selected template */}
                {selectedTemplate && 
                  React.createElement(
                    Templates[templateData.find(t => t.id === selectedTemplate)?.component as TemplateKey] as any,
                    { 
                      preview: true,
                      primaryColor: primaryColor,
                      accentColor: primaryColor
                    }
                  )
                }
              </div>
              
              <div className="w-72">
                <h4 className="font-semibold text-gray-800 mb-3">Template Options</h4>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Font Family</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Pretendard</option>
                      <option>Arial</option>
                      <option>Georgia</option>
                      <option>Helvetica</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Primary Color</label>
                    <div className="flex gap-2">
                      <div 
                        className={`w-8 h-8 bg-blue-600 rounded-full cursor-pointer ${primaryColor === '#3B82F6' ? 'ring-2 ring-black' : ''}`}
                        onClick={() => setPrimaryColor('#3B82F6')}
                      ></div>
                      <div 
                        className={`w-8 h-8 bg-purple-600 rounded-full cursor-pointer ${primaryColor === '#8B5CF6' ? 'ring-2 ring-black' : ''}`}
                        onClick={() => setPrimaryColor('#8B5CF6')}
                      ></div>
                      <div 
                        className={`w-8 h-8 bg-green-600 rounded-full cursor-pointer ${primaryColor === '#10B981' ? 'ring-2 ring-black' : ''}`}
                        onClick={() => setPrimaryColor('#10B981')}
                      ></div>
                      <div 
                        className={`w-8 h-8 bg-red-600 rounded-full cursor-pointer ${primaryColor === '#EF4444' ? 'ring-2 ring-black' : ''}`}
                        onClick={() => setPrimaryColor('#EF4444')}
                      ></div>
                      <div 
                        className={`w-8 h-8 bg-gray-800 rounded-full cursor-pointer ${primaryColor === '#1F2937' ? 'ring-2 ring-black' : ''}`}
                        onClick={() => setPrimaryColor('#1F2937')}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Layout Style</label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="border border-blue-500 bg-blue-50 p-2 rounded-md text-center cursor-pointer">
                        <p className="text-sm font-medium text-blue-600">Standard</p>
                      </div>
                      <div className="border border-gray-300 p-2 rounded-md text-center cursor-pointer hover:bg-gray-50">
                        <p className="text-sm font-medium text-gray-700">Compact</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <button
                    className="w-full mb-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    onClick={() => {
                      setModalOpen(false);
                      setSuccessModalOpen(true);
                    }}
                  >
                    Use This Template
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
      </Modal>
      
      {/* Success Modal */}
      <AlertModal
        isOpen={successModalOpen}
        onClose={() => setSuccessModalOpen(false)}
        title="Template Applied"
        message="The template has been successfully applied to your resume. You can now edit your content to match this template style."
        confirmText="Edit Resume"
        showCancel={false}
        type="success"
      />
    </div>
  );
};

export default TemplatesPage;