import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ApplicationAdd() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: '',
    jobTitle: '',
    jobDescription: '',
    location: '',
    salary: '',
    applicationStatus: 'Not Started',
    applicationDeadline: '',
    notes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Get existing applications from localStorage
      const existingApplications = JSON.parse(localStorage.getItem('applications') || '[]');
      
      // Add new application to the array
      const updatedApplications = [...existingApplications, formData];
      
      // Save back to localStorage
      localStorage.setItem('applications', JSON.stringify(updatedApplications));
      
      // Navigate back to applications list
      navigate('/applications');
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  };

  return (
    <div className="application-add-container">
      <h2>Add New Application</h2>
      <form onSubmit={handleSubmit} className="application-form">
        <div className="form-group">
          <label htmlFor="companyName">Company Name *</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="jobTitle">Job Title *</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleInputChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="jobDescription">Job Description</label>
          <textarea
            id="jobDescription"
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleInputChange}
            className="form-input"
            rows="4"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="salary">Expected Salary</label>
          <input
            type="text"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleInputChange}
            className="form-input"
            placeholder="e.g., $80,000/year"
          />
        </div>

        <div className="form-group">
          <label htmlFor="applicationStatus">Application Status *</label>
          <select
            id="applicationStatus"
            name="applicationStatus"
            value={formData.applicationStatus}
            onChange={handleInputChange}
            className="form-input"
            required
          >
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Submitted">Submitted</option>
            <option value="Interview Scheduled">Interview Scheduled</option>
            <option value="Offer Received">Offer Received</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="applicationDeadline">Application Deadline</label>
          <input
            type="date"
            id="applicationDeadline"
            name="applicationDeadline"
            value={formData.applicationDeadline}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            className="form-input"
            rows="3"
            placeholder="Add any additional notes or reminders..."
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button">
            Add Application
          </button>
          <button 
            type="button" 
            className="cancel-button"
            onClick={() => navigate('/applications')}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}