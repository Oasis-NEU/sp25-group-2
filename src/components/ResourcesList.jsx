import React from 'react';

export default function ResourcesList() {
  const resources = [
    {
      title: 'NU Works',
      link: 'https://nuworks.northeastern.edu/',
      description: 'Northeastern University\'s co-op job portal.'
    },
    {
      title: 'LinkedIn Learning',
      link: 'https://www.linkedin.com/learning',
      description: 'Access courses to enhance your professional skills.'
    },
    {
      title: 'Glassdoor',
      link: 'https://www.glassdoor.com',
      description: 'Research companies and read employee reviews.'
    },
    {
      title: 'Handshake',
      link: 'https://joinhandshake.com/',
      description: 'The better career social network built for Gen Z.'
    }
  ];

  return (
    <div className="resources-content">
      <div className="resources-grid">
        <div className="resource-card">
          <h2>Resume Templates</h2>
          <p>Access professional resume templates and guidelines</p>
        </div>
        <div className="resource-card">
          <h2>Cover Letter Tips</h2>
          <p>Learn how to write compelling cover letters</p>
        </div>
        <div className="resource-card">
          <h2>Career Guides</h2>
          <p>Explore industry-specific career guides</p>
        </div>
        <div className="resource-card">
          <h2>Networking Tips</h2>
          <p>Discover effective networking strategies</p>
        </div>
      </div>

      <div className="resources-list">
        {resources.map((resource, index) => (
          <div key={index} className="resource-item">
            <h3>{resource.title}</h3>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
            <p>{resource.description}</p>
          </div>
        ))}
      </div>

      <div className="planning-tips">
        <h2>Planning Tips</h2>
        <div className="tip-box">
          <h3>Time Management</h3>
          <p>
            Balance schoolwork and co-op applications by setting deadlines and prioritizing tasks.
          </p>
        </div>
        <div className="tip-box">
          <h3>Application Strategy</h3>
          <p>
            Apply to a mix of high-priority and lower-priority co-ops to maximize chances of acceptance.
          </p>
        </div>
      </div>
    </div>
  );
}