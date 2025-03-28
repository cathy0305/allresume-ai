// Template data for the resume templates
export interface TemplateInfo {
    id: number;
    name: string;
    category: string;
    description: string;
    previewImage?: string; // This would be a path to an image in a real app
    component: string; // Name of the component to use
  }
  
  const templates: TemplateInfo[] = [
    {
      id: 1,
      name: "Modern",
      category: "General",
      description: "Clean, professional resume layout with clear sections for experience and skills.",
      component: "ModernTemplate"
    },
    {
      id: 2,
      name: "Creative",
      category: "Designer",
      description: "Colorful resume layout perfect for creative professionals with bold accents.",
      component: "CreativeTemplate"
    },
    {
      id: 3,
      name: "Professional",
      category: "General",
      description: "Elegant resume with a sidebar accent great for executive and professional roles.",
      component: "ProfessionalTemplate"
    },
    {
      id: 4,
      name: "Minimal",
      category: "Software Developer",
      description: "Code-inspired minimal design perfect for developers and technical roles.",
      component: "MinimalTemplate"
    },
    {
      id: 5,
      name: "Compact",
      category: "General",
      description: "Space-efficient design that fits more content on a single page.",
      component: "ModernTemplate" // Using Modern as fallback
    },
    {
      id: 6,
      name: "Infographic",
      category: "Marketing",
      description: "Visual resume with charts and infographics to showcase achievements.",
      component: "CreativeTemplate" // Using Creative as fallback
    }
  ];
  
  export default templates;