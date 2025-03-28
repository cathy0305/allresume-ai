import ModernTemplate from './ModernTemplate.tsx';
import CreativeTemplate from './CreativeTemplate.tsx';
import ProfessionalTemplate from './ProfessionalTemplate.tsx';
import MinimalTemplate from './MinimalTemplate.tsx';

// Export object that maps template names to components
const Templates = {
  ModernTemplate,
  CreativeTemplate,
  ProfessionalTemplate,
  MinimalTemplate
};

export type TemplateKey = keyof typeof Templates;

export default Templates;