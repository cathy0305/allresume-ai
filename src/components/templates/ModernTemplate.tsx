import React from 'react';

interface ResumeData {
  name: string;
  title: string;
  contact: {
    phone: string;
    email: string;
    location: string;
    linkedin: string;
  };
  summary: string;
  experience: Array<{
    company: string;
    position: string;
    period: string;
    achievements: string[];
  }>;
  skills: string[];
  education: {
    institution: string;
    degree: string;
    period: string;
    details?: string[];
  };
  languages?: string[];
}

interface ModernTemplateProps {
  data?: ResumeData;
  preview?: boolean;
}

const ModernTemplate: React.FC<ModernTemplateProps> = ({ 
  data = {
    name: "JOHN DOE",
    title: "Software Engineer",
    contact: {
      phone: "(555) 123-4567",
      email: "johndoe@email.com",
      location: "San Francisco, CA",
      linkedin: "linkedin.com/in/johndoe"
    },
    summary: "Dedicated Software Engineer with 5+ years of experience specializing in full-stack development with React, Node.js, and cloud technologies. Strong expertise in designing, developing, and optimizing scalable applications with a focus on user-centric solutions. Proven track record of delivering high-quality software through collaborative teamwork in agile environments.",
    experience: [
      {
        company: "ABC TECHNOLOGY",
        position: "Senior Frontend Developer",
        period: "March 2020 - Present",
        achievements: [
          "Developed user-centric web applications using React and TypeScript",
          "Designed scalable solutions utilizing microservices architecture",
          "Led initiatives to establish CI/CD pipelines and improve code quality",
          "Resolved performance bottlenecks in key projects, reducing loading times by 40%"
        ]
      },
      {
        company: "XYZ SOLUTIONS",
        position: "Web Developer",
        period: "January 2018 - February 2020",
        achievements: [
          "Built responsive websites using JavaScript, HTML5, and CSS3",
          "Developed RESTful APIs and integrated with backend systems",
          "Implemented UI/UX optimizations to enhance user experience"
        ]
      }
    ],
    skills: [
      "Frontend: React, Redux, TypeScript, JavaScript, HTML5, CSS3, SASS, Webpack",
      "Backend: Node.js, Express, REST APIs, GraphQL",
      "Databases: MongoDB, MySQL, PostgreSQL",
      "Cloud & DevOps: AWS, Docker, Kubernetes, CI/CD, Git",
      "Testing: Jest, React Testing Library, Cypress"
    ],
    education: {
      institution: "UNIVERSITY OF CALIFORNIA, BERKELEY",
      degree: "Bachelor of Science in Computer Science",
      period: "August 2014 - May 2018"
    },
    languages: [
      "English (Native), Korean (Professional Working Proficiency)"
    ]
  },
  preview = false
}) => {
  return (
    <div className={`bg-white ${preview ? 'p-4 max-h-[45rem] overflow-auto' : 'p-6'}`}>
      <div className="mb-6">
        <h1 className="text-3xl font-bold uppercase">{data.name}</h1>
        <p className="text-lg text-gray-600">{data.title}</p>
        
        <div className="flex flex-wrap mt-2 text-sm text-gray-600 gap-4">
          <div>{data.contact.phone}</div>
          <div>{data.contact.email}</div>
          <div>{data.contact.location}</div>
          <div>{data.contact.linkedin}</div>
        </div>
      </div>
      
      <div className="border-t border-gray-300 pt-4 mb-6">
        <h2 className="text-lg font-bold uppercase mb-2">SUMMARY</h2>
        <p className="text-sm">{data.summary}</p>
      </div>
      
      <div className="mb-6">
        <h2 className="text-lg font-bold uppercase mb-2">EXPERIENCE</h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-start">
              <h3 className="font-bold">{exp.company}</h3>
              <div className="text-sm italic">{exp.period}</div>
            </div>
            <p className="text-sm italic mb-2">{exp.position}</p>
            <ul className="list-disc ml-4 text-sm">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="mb-1">{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mb-6">
        <h2 className="text-lg font-bold uppercase mb-2">SKILLS</h2>
        <ul className="list-disc ml-4 text-sm">
          {data.skills.map((skill, index) => (
            <li key={index} className="mb-1">{skill}</li>
          ))}
        </ul>
      </div>
      
      <div className="mb-6">
        <h2 className="text-lg font-bold uppercase mb-2">EDUCATION</h2>
        <div>
          <h3 className="font-bold">{data.education.institution}</h3>
          <p className="text-sm">{data.education.degree}</p>
          <p className="text-sm italic">{data.education.period}</p>
          {data.education.details && (
            <ul className="list-disc ml-4 text-sm mt-1">
              {data.education.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      
      {data.languages && (
        <div>
          <h2 className="text-lg font-bold uppercase mb-2">LANGUAGES</h2>
          <p className="text-sm">{data.languages.join(", ")}</p>
        </div>
      )}
    </div>
  );
};

export default ModernTemplate;