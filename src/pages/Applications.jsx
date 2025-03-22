import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

export default function Applications() {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        // Load applications from localStorage when component mounts
        const savedApplications = localStorage.getItem('applications');
        if (savedApplications) {
            setApplications(JSON.parse(savedApplications));
        }
    }, []);

    return (
        <>
            <NavBar />
            <div className="applications-container">
                <h2>Your Applications</h2>
                {applications.length === 0 ? (
                    <div className="no-applications">
                        <p>You haven't added any applications yet.</p>
                        <Link to="/applications-add" className="add-application-button">
                            Add Your First Application
                        </Link>
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
        </>
    );
}
