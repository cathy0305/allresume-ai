import React from 'react';

interface ResumeData {
  name: string;
  title: string;
  contact: {
    phone: string;
    email: string;
    location: string;
    portfolio?: string;
    linkedin?: string;
  };
  summary: string;
  experience: Array<{
    company: string;
    companyDetail?: string;
    position: string;
    period: string;
    location?: string;
    achievements: string[];
  }>;
  skills: {
    [category: string]: string[];
  };
  tools?: {
    [category: string]: string[];
  };
  education: {
    institution: string;
    degree: string;
    period: string;
    location?: string;
  };
  achievements?: Array<{
    title: string;
    organization: string;
    date: string;
    location: string;
    description: string;
  }>;
}

interface ProfessionalTemplateProps {
  data?: ResumeData;
  accentColor?: string;
  preview?: boolean;
}

const ProfessionalTemplate: React.FC<ProfessionalTemplateProps> = ({
  data = {
    name: "ALEX PARKER",
    title: "Product Designer",
    contact: {
      phone: "+1 555 123 4567",
      email: "alex.parker@email.com",
      location: "San Francisco, CA",
      linkedin: "linkedin.com/in/alexparker",
      portfolio: "alexparker.design"
    },
    summary: "Tech-savvy UI/UX Designer with a passion for creating user-centered digital experiences. Skilled in designing intuitive workflows, integrating AI technologies, and managing end-to-end product development. Bridging the gap between design and technology, I deliver impactful, innovative solutions that align user needs with business objectives.",
    experience: [
      {
        company: "Design Agency XYZ",
        position: "Redesign of Finance Management App",
        period: "Oct 2023 - Mar 2024",
        location: "San Francisco, CA",
        achievements: [
          "Led a comprehensive redesign project for a financial management application, improving user engagement metrics by 45% and reducing task completion time",
          "Conducted user research and developed personas to guide design decisions, resulting in a more intuitive interface and workflow",
          "Collaborated with development team to ensure seamless implementation"
        ]
      },
      {
        company: "Retail Solutions Inc.",
        position: "E-Commerce Redesign Project",
        period: "Mar 2023 - Sep 2023",
        location: "Chicago, IL",
        achievements: [
          "Redesigned the user journey for a major retail brand's online store, focusing in a mobile-first approach and conversion optimization",
          "Created wireframes, prototypes, and conducted usability testing to refine the shopping experience across multiple devices",
          "Achieved 28% increase in conversion rate and 15% reduction in cart abandonment"
        ]
      },
      {
        company: "HealthTech Innovations",
        position: "AI-Enhanced Health Tracking Platform",
        period: "Jun 2022 - Feb 2023",
        location: "Boston, MA",
        achievements: [
          "Created an intuitive interface for a health tracking application with emphasis",
          "Implemented AI recommendations engine to provide personalized insights",
          "App featured in Apple's App Store and received recognition for inclusive design"
        ]
      }
    ],
    skills: {
      "UI/UX Design": ["Wireframing, Prototyping, Userflows", "Accessibility Standards", "Persona Development & User Research"],
      "Frontend Development": ["HTML/CSS, JavaScript", "Responsive Design"],
      "Project Management": ["Agile Methodologies", "Cross-Functional Collaboration"]
    },
    tools: {
      "Design Tools": ["Figma, Figma, Adobe XD", "Illustrator, Photoshop"],
      "Development Tools": ["Visual Studio Code, GitHub", "Visual Studio Code, GitHub"]
    },
    education: {
      institution: "Rhode Island School of Design",
      degree: "Bachelor of Fine Arts in Graphic Design",
      period: "2018 - 2022",
      location: "Providence, RI"
    },
    achievements: [
      {
        title: "UX Design Excellence Award",
        organization: "Design Industry Association",
        date: "2023",
        location: "New York, NY",
        description: "Recognized for outstanding achievement in user-centered design for the Health Tracking Platform, demonstrating exceptional innovation in accessibility."
      },
      {
        title: "Winner, Design Hackathon",
        organization: "Tech Conference",
        date: "2022",
        location: "San Francisco, CA",
        description: "Designed and prototyped an AI-driven solution for elderly care, winning first place for addressing aging population challenges with innovative user-centered solutions."
      }
    ]
  },
  accentColor = "#FF6B6B", // Default accent color (coral red)
  preview = false
}) => {
  return (
    <div className={`bg-white flex ${preview ? 'p-4 max-h-[45rem] overflow-auto' : 'p-6'}`}>
      {/* Left sidebar with accent color */}
      <div className="w-1/12" style={{ backgroundColor: accentColor }}></div>
      
      {/* Main content */}
      <div className="flex-1 pl-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">{data.name}</h1>
          <p className="text-xl" style={{ color: accentColor }}>{data.title}</p>
          <p className="mt-4 text-gray-600 max-w-3xl">{data.summary}</p>
        </div>
        
        <div className="flex">
          {/* Left column */}
          <div className="w-2/3 pr-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">EXPERIENCE</h2>
              <div className="border-t border-gray-300"></div>
              
              {data.experience.map((exp, index) => (
                <div key={index} className="mt-6">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-lg font-bold text-gray-800">Redesign of Finance Management App</h3>
                    <span className="text-gray-600">{exp.period}</span>
                  </div>
                  <p className="text-gray-600 italic">{exp.company}</p>
                  <div className="text-right text-gray-600">{exp.location}</div>
                  
                  <ul className="mt-2 list-disc pl-5">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-700 mb-1">{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {data.achievements && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">ACHIEVEMENT</h2>
                <div className="border-t border-gray-300"></div>
                
                {data.achievements.map((achievement, index) => (
                  <div key={index} className="mt-6">
                    <h3 className="text-lg font-bold text-gray-800">{achievement.title}</h3>
                    <p className="text-gray-600 italic">{achievement.organization}</p>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{achievement.date}</span>
                      <span className="text-gray-600">{achievement.location}</span>
                    </div>
                    <p className="mt-2 text-gray-700">{achievement.description}</p>
                  </div>
                ))}
              </div>
            )}
            
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">EDUCATION</h2>
              <div className="border-t border-gray-300"></div>
              
              <div className="mt-6">
                <h3 className="text-lg font-bold text-gray-800">{data.education.institution}</h3>
                <p className="text-gray-700">{data.education.degree}</p>
                <div className="flex justify-between">
                  <span className="text-gray-600">{data.education.period}</span>
                  {data.education.location && <span className="text-gray-600">{data.education.location}</span>}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column */}
          <div className="w-1/3">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">CONTACT</h2>
              <div className="border-t border-gray-300"></div>
              
              <div className="mt-4 space-y-2">
                <p className="text-gray-700">
                  <span className="font-medium">LinkedIn Profile</span><br />
                  {data.contact.linkedin}
                </p>
                
                {data.contact.portfolio && (
                  <p className="text-gray-700">
                    <span className="font-medium">Portfolio Link</span><br />
                    {data.contact.portfolio}
                  </p>
                )}
                
                <p className="text-gray-700">
                  <span className="font-medium">Email</span><br />
                  {data.contact.email}
                </p>
                
                <p className="text-gray-700">
                  <span className="font-medium">Phone</span><br />
                  {data.contact.phone}
                </p>
                
                <p className="text-gray-700">
                  <span className="font-medium">Location</span><br />
                  {data.contact.location}
                </p>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">SKILLS</h2>
              <div className="border-t border-gray-300"></div>
              
              <div className="mt-4 space-y-4">
                {Object.entries(data.skills).map(([category, skills]) => (
                  <div key={category}>
                    <h3 className="text-lg font-semibold text-gray-700">{category}</h3>
                    <ul className="list-disc pl-5 mt-1">
                      {skills.map((skill, index) => (
                        <li key={index} className="text-gray-600 mb-0.5">{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            {data.tools && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">TOOLS</h2>
                <div className="border-t border-gray-300"></div>
                
                <div className="mt-4 space-y-4">
                  {Object.entries(data.tools).map(([category, tools]) => (
                    <div key={category}>
                      <h3 className="text-lg font-semibold text-gray-700">{category}</h3>
                      <ul className="list-disc pl-5 mt-1">
                        {tools.map((tool, index) => (
                          <li key={index} className="text-gray-600 mb-0.5">{tool}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTemplate;