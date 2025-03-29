import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import { useParams, useNavigate } from 'react-router-dom';



const JobDetailPage = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null); // State to hold job data

  useEffect(() => {
    // Fetch job data based on jobId
    const fetchJobData = async () => {
      try {
        const response = await fetch(`/api/jobs/${jobId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setJob(data);
      } catch (error) {
        console.error('Error fetching job data:', error);
        setJob(null);
      }
    };

    fetchJobData();
  }, [jobId]);

  // Placeholder for job data, in a real application this would be fetched from an API



  
  // Placeholder for job data, in a real application this would be fetched from an API
  // Placeholder for job data, in a real application this would be fetched from an API


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

      {job && (
        <>
          {job.bannerImage && <img src={job.bannerImage} alt="Job Banner" />}
          <h1>{job.title}</h1>
          <p>Date Posted: {job.datePosted || 'N/A'}</p>
          <p>Job Type: {job.jobType || 'N/A'}</p>
          <p>Location: {job.location}</p>
          <p>{job.description || 'No description available'}</p>

          <button onClick={handleApply}>Apply</button>
          <button onClick={handleCopyLink}>Copy Job Link</button>
        </>
      )}

    </div>
  );
};

export default JobDetailPage;
