import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const JobDetailPage = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();

  
  // Placeholder for job data, in a real application this would be fetched from an API
  const job = {
    id: jobId,
    title: 'Sample Job Title',
    datePosted: '2023-10-01',
    jobType: 'Full-Time',
    location: 'New York',
    description: 'This is a sample job description.',
    bannerImage: 'path/to/banner/image.jpg', // Placeholder for banner image
  };

  const handleApply = () => {
    // Logic for applying to the job
    alert('Applied for the job!');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Job link copied to clipboard!');
  };

  return (
    <div>
      <button onClick={() => navigate('/')}>Back to Job Listings</button>

      {job.bannerImage && <img src={job.bannerImage} alt="Job Banner" />}
      <h1>{job.title}</h1>
      <p>Date Posted: {job.datePosted}</p>
      <p>Job Type: {job.jobType}</p>
      <p>Location: {job.location}</p>
      <p>{job.description}</p>
      <button onClick={handleApply}>Apply</button>
      <button onClick={handleCopyLink}>Copy Job Link</button>
    </div>
  );
};

export default JobDetailPage;
