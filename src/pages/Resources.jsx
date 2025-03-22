import React from 'react';

function Resources() {
  const resources = [
    {
      title: 'NUWorks',
      link: 'https://nuworks.northeastern.edu/',
      description: 'Northeastern University\'s co-op job portal.',
    },
    {
        title: 'Handshake',
        link: 'https://joinhandshake.com/',
        description: 'The better career social network built for Gen Z',
      },
      
  ];

  return (
    <div className="resources-container">
      <h2>Resources</h2>
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

