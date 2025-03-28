import React from 'react';

interface ResumeData {
  name: string;
  title: string;
  contact: {
    phone: string;
    email: string;
    github?: string;
    linkedin?: string;
  };
  profile: string;
  technicalSkills: {
    [category: string]: string[];
  };
  projects: Array<{
    name: string;
    technologies: string;
    githubLink?: string;
    achievements: string[];
  }>;
  experience: Array<{
    company: string;
    position: string;
    period: string;
    achievements: string[];
  }>;
  education: {
    institution: string;
    degree: string;
    period: string;
  };
  certifications?: string[];
}

interface MinimalTemplateProps {
  data?: ResumeData;
  preview?: boolean;
}

const MinimalTemplate: React.FC<MinimalTemplateProps> = ({
  data = {
    name: "JANE DOE",
    title: "Full Stack Developer",
    contact: {
      phone: "(555) 987-6543",
      email: "janedoe@email.com",
      github: "github.com/janedoe",
      linkedin: "linkedin.com/in/janedoe"
    },
    profile: "Full Stack Developer with 5+ years of experience building robust applications with React, Node.js, and cloud services. Passionate about clean code, responsive design, and test-driven development.",
    technicalSkills: {
      "Languages": ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3/SASS"],
      "Frontend": ["React", "Redux", "Angular", "Vue.js", "Webpack", "Jest"],
      "Backend": ["Node.js", "Express", "Django", "RESTful APIs", "GraphQL"],
      "Tools": ["VS Code", "Postman", "Jira", "Figma", "npm/yarn", "Linux"]
    },
    projects: [
      {
        name: "E-COMMERCE PLATFORM",
        technologies: "React, Node.js, MongoDB, AWS | github.com/janedoe/ecommerce",
        achievements: [
          "Built a full-stack e-commerce platform with React frontend and Node.js backend",
          "Implemented responsive design, cart functionality, and secure payment processing",
          "Deployed on AWS using Docker containers and CI/CD pipeline"
        ]
      },
      {
        name: "REAL-TIME CHAT APPLICATION",
        technologies: "Vue.js, Firebase, WebSockets | github.com/janedoe/chat-app",
        achievements: [
          "Developed a real-time chat application using Vue.js and Firebase",
          "Integrated WebSockets for instant messaging and notifications",
          "Implemented user authentication, message encryption, and file sharing"
        ]
      }
    ],
    experience: [
      {
        company: "TECH INNOVATIONS INC.",
        position: "Senior Full Stack Developer",
        period: "July 2020 - Present",
        achievements: [
          "Lead development of microservices architecture for enterprise SaaS platform",
          "Implemented CI/CD pipeline improving deployment efficiency by 60%"
        ]
      }
    ],
    education: {
      institution: "STANFORD UNIVERSITY",
      degree: "B.S. Computer Science",
      period: "2014-2018"
    },
    certifications: [
      "AWS Certified Developer - Associate",
      "MongoDB Certified Developer"
    ]
  },
  preview = false
}) => {
  return (
    <div className={`bg-white font-mono ${preview ? 'p-4 max-h-[45rem] overflow-auto' : 'p-6'}`}>
      {/* Header section */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-gray-800">{data.name}</h1>
        <h2 className="text-lg text-gray-600 mt-1">{data.title}</h2>
        
        <div className="flex flex-wrap text-sm text-gray-600 mt-2">
          <div className="mr-6">{data.contact.phone}</div>
          <div className="mr-6">|</div>
          <div className="mr-6">{data.contact.email}</div>
          <div className="mr-6">|</div>
          {data.contact.github && (
            <>
              <div className="mr-6">{data.contact.github}</div>
              <div className="mr-6">|</div>
            </>
          )}
          {data.contact.linkedin && (
            <div>{data.contact.linkedin}</div>
          )}
        </div>
        <div className="border-b border-gray-300 my-3"></div>
      </div>

      {/* Profile section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold uppercase mb-2">PROFILE</h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          {data.profile}
        </p>
        <div className="border-b border-gray-200 my-3"></div>
      </div>

      {/* Technical Skills section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold uppercase mb-2">TECHNICAL SKILLS</h3>
        <dl className="text-sm grid gap-y-2">
          {Object.entries(data.technicalSkills).map(([category, skills]) => (
            <div key={category} className="flex">
              <dt className="font-bold w-24">{category}:</dt>
              <dd className="flex-1">{skills.join(', ')}</dd>
            </div>
          ))}
        </dl>
        <div className="border-b border-gray-200 my-3"></div>
      </div>

      {/* Projects section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold uppercase mb-2">PROJECTS</h3>
        <div className="space-y-4">
          {data.projects.map((project, index) => (
            <div key={index}>
              <h4 className="font-bold text-base">{project.name}</h4>
              <p className="text-xs text-gray-500 italic mb-2">{project.technologies}</p>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                {project.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-b border-gray-200 my-3"></div>
      </div>

      {/* Work Experience section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold uppercase mb-2">WORK EXPERIENCE</h3>
        <div className="space-y-4">
          {data.experience.map((exp, index) => (
            <div key={index}>
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-base">{exp.company}</h4>
                <span className="text-sm">{exp.period}</span>
              </div>
              <p className="text-sm italic mb-2">{exp.position}</p>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-b border-gray-200 my-3"></div>
      </div>

      {/* Education section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold uppercase mb-2">EDUCATION</h3>
        <div className="flex justify-between items-center">
          <h4 className="font-bold text-base">{data.education.institution}</h4>
          <span className="text-sm">{data.education.period}</span>
        </div>
        <p className="text-sm">{data.education.degree}</p>
        <div className="border-b border-gray-200 my-3"></div>
      </div>

      {/* Certifications section (if available) */}
      {data.certifications && data.certifications.length > 0 && (
        <div>
          <h3 className="text-lg font-bold uppercase mb-2">CERTIFICATIONS</h3>
          <ul className="list-disc pl-5 text-sm text-gray-700">
            {data.certifications.map((cert, index) => (
              <li key={index} className="mb-1">{cert}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MinimalTemplate;