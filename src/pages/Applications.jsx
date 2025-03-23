import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar'; 

export default function Applications() {
    const [applications, setApplications] = useState([]);

    // Define status priority order
    const statusPriority = {
        'Not Started': 1,
        'In Progress': 2,
        'Submitted': 3,
        'Interview Scheduled': 4,
        'Offer Received': 5,
        'Rejected': 6
    };

    useEffect(() => {
        // Load applications from localStorage when component mounts
        const savedApplications = localStorage.getItem('applications');
        if (savedApplications) {
            const apps = JSON.parse(savedApplications);
            // Sort applications by status priority
            const sortedApps = [...apps].sort((a, b) => 
                statusPriority[a.applicationStatus] - statusPriority[b.applicationStatus]
            );
            setApplications(sortedApps);
        }
    }, []);

    return (
        <Layout>
            <div>
                <h2 className="application-title">YOUR APPLICATIONS</h2>
                {/* ProgressBar component */}
                {applications.length > 0 && <ProgressBar applications={applications} />}
                {applications.length === 0 ? (
                    <div className="no-applications">
                        <p>You haven't added any applications yet.</p>
                    </div>
                ) : (
                    <div className="applications-list">
                        {applications.map((app, index) => (
                            <div key={index} className="application-card">
                                <h3>{app.companyName}</h3>
                                <div className="application-details">
                                    <p><strong>Job Title:</strong> {app.jobTitle}</p>
                                    <p><strong>Location:</strong> {app.location}</p>
                                    <p><strong>Status:</strong> {app.applicationStatus}</p>
                                    <p><strong>Deadline:</strong> {app.applicationDeadline}</p>
                                    {app.salary && <p><strong>Expected Salary:</strong> {app.salary}</p>}
                                </div>
                                <div className="application-description">
                                    <p><strong>Job Description:</strong></p>
                                    <p>{app.jobDescription}</p>
                                </div>
                                {app.notes && (
                                    <div className="application-notes">
                                        <p><strong>Notes:</strong></p>
                                        <p>{app.notes}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Layout>
    );
}
