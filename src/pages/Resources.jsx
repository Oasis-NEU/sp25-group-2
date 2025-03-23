import React from 'react';
import Layout from '../components/Layout';
import ResourcesList from '../components/ResourcesList';

export default function Resources() {
  return (
    <div className="resources-page">
      <h1>Resources</h1>
      <ResourcesList />
    </div>
  );
}