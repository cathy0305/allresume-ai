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
  skills: string[] | Array<{
    category: string;
    items: string[];
  }>;
  education: {
    institution: string;
    degree: string;
    period: string;
    details?: string[];
  };
  certifications?: string[];
}

interface CreativeTemplateProps {
  data?: ResumeData;
  primaryColor?: string;
  preview?: boolean;
}

const CreativeTemplate: React.FC<CreativeTemplateProps> = ({ 
  data = {
    name: "JOHN DOE",
    title: "Marketing Specialist",
    contact: {
      phone: "(555) 123-4567",
      email: "johndoe@email.com",
      location: "Chicago, IL",
      linkedin: "linkedin.com/in/johndoe"
    },
    summary: "Results-driven Marketing Specialist with 5+ years of experience in digital marketing, brand development, in planning and executing digital campaigns, social media management, and SEO/SEM optimization. a proven track record of increasing brand awareness and driving revenue growth. Demonstrated excellence in planning and executing digital campaigns, social media management, and SEO/SEM optimization.",
    experience: [
      {
        company: "ABC MARKETING",
        position: "Senior Digital Marketing Manager",
        period: "March 2020 - Present",
        achievements: [
          "Developed and implemented digital marketing strategies, improving campaign ROI by 35%",
          "Managed social media channels, increasing brand awareness and audience growth by 50%",
          "Executed SEO/SEM initiatives that drove 45% growth in organic traffic and reduced CPA by 20%",
          "Led content marketing strategies resulting in 3x increase in lead generation and 25% higher conversion"
        ]
      },
      {
        company: "XYZ DIGITAL",
        position: "Marketing Coordinator",
        period: "January 2018 - February 2020",
        achievements: [
          "Assisted in planning and implementing marketing campaigns across multiple channels",
          "Created engaging content for social media platforms, increasing engagement by 30%",
          "Conducted market research and competitor analysis to inform marketing strategies",
          "Managed email marketing campaigns achieving open rates 15% above industry average"
        ]
      }
    ],
    skills: [
      { category: "Digital Marketing Strategy", items: ["Content Marketing", "Social Media Management", "SEO/SEM"] },
      { category: "Email Marketing", items: ["Marketing Analytics", "PPC Campaigns", "A/B Testing"] },
      { category: "Google Analytics", items: ["Adobe Creative Suite", "HubSpot & Mailchimp", "WordPress & CMS"] }
    ],
    education: {
      institution: "NORTHWESTERN UNIVERSITY",
      degree: "Bachelor of Science in Marketing",
      period: "August 2014 - May 2018",
      details: [
        "Minor in Digital Media Studies",
        "GPA: 3.8/4.0"
      ]
    },
    certifications: [
      "Google Ads Certification",
      "HubSpot Inbound Marketing Certification",
      "Facebook Blueprint Certification"
    ]
  },
  primaryColor = "#3182ce", // Blue by default
  preview = false
}) => {
  return (
    <div className={`bg-white ${preview ? 'p-4 max-h-[45rem] overflow-auto' : 'p-6'}`}>
      <div className="mb-6" style={{ borderTop: `8px solid ${primaryColor}` }}>
        <div className="py-4">
          <h1 className="text-4xl font-bold" style={{ color: primaryColor }}>{data.name}</h1>
          <p className="text-lg text-gray-600">{data.title}</p>
          
          <div className="flex flex-wrap mt-3 text-sm gap-4">
            {Object.entries(data.contact).map(([key, value]) => (
              <div key={key} className="flex items-center">
                <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: primaryColor }}></div>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2" style={{ color: primaryColor }}>SUMMARY</h2>
        <div className="h-1 w-20 mb-3" style={{ backgroundColor: primaryColor }}></div>
        <p className="text-sm">{data.summary}</p>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2" style={{ color: primaryColor }}>EXPERIENCE</h2>
        <div className="h-1 w-20 mb-3" style={{ backgroundColor: primaryColor }}></div>
        
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-lg">{exp.company}</h3>
              <div className="text-sm">{exp.period}</div>
            </div>
            <p className="text-gray-600 italic mb-2">{exp.position}</p>
            <ul className="list-disc ml-4 text-sm">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="mb-1">{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2" style={{ color: primaryColor }}>SKILLS</h2>
        <div className="h-1 w-20 mb-3" style={{ backgroundColor: primaryColor }}></div>
        
        {Array.isArray(data.skills) && typeof data.skills[0] === 'string' ? (
          <ul className="list-disc ml-4 text-sm">
            {data.skills.map((skill, index) => (
              <li key={index} className="mb-1">
                {typeof skill === 'string' ? skill : skill.category}
              </li>
            ))}
          </ul>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {(data.skills as Array<{category: string; items: string[]}>).map((skillGroup, index) => (
              <div key={index}>
                <h3 className="font-bold mb-1">{skillGroup.category}</h3>
                <ul className="text-sm">
                  {skillGroup.items.map((item, idx) => (
                    <li key={idx} className="mb-1">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-2" style={{ color: primaryColor }}>EDUCATION</h2>
          <div className="h-1 w-20 mb-3" style={{ backgroundColor: primaryColor }}></div>
          <div>
            <h3 className="font-bold">{data.education.institution}</h3>
            <p className="text-sm">{data.education.degree}</p>
            <p className="text-sm italic">{data.education.period}</p>
            {data.education.details && (
              <ul className="text-sm mt-1">
                {data.education.details.map((detail, index) => (
                  <li key={index}>• {detail}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        
        {data.certifications && (
          <div>
            <h2 className="text-xl font-bold mb-2" style={{ color: primaryColor }}>CERTIFICATIONS</h2>
            <div className="h-1 w-20 mb-3" style={{ backgroundColor: primaryColor }}></div>
            <ul className="text-sm">
              {data.certifications.map((cert, index) => (
                <li key={index} className="mb-2">• {cert}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreativeTemplate;