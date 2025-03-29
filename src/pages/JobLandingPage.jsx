import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const jobs = [
  {
    id: 1,
    title: "Full Stack Software Developer",
    company: "First People Recruitment Solutions",
    location: "Canberra ACT (Hybrid)",
    salary: "Up to $95,714 p.a. + 15.4% Super",
    details: "Government - Federal (Government & Defence)",
  },
  {
    id: 2,
    title: "Frontend Angular Developer",
    company: "Tech Solutions Ltd",
    location: "Sydney NSW (Remote)",
    salary: "$110,000 - $130,000 + Super",
    details: "Software Engineering & Development",
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "Innovative Tech Co.",
    location: "Melbourne VIC (Remote)",
    salary: "$120,000 - $140,000 + Super",
    details: "Software Engineering & Development",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "Cloud Solutions Inc.",
    location: "Brisbane QLD (Hybrid)",
    salary: "$115,000 - $135,000 + Super",
    details: "IT & Networking",
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "Data Insights Ltd",
    location: "Perth WA (Remote)",
    salary: "$130,000 - $150,000 + Super",
    details: "Data Science & Analytics",
  },
];


const JobListing = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Job Finder</h1>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="What job are you looking for?"
            className="p-2 rounded text-black"
          />
          <input
            type="text"
            placeholder="Enter city, state, or region"
            className="p-2 rounded text-black"
          />
          <button className="bg-pink-500 px-4 py-2 rounded">Search</button>
        </div>
      </header>

      <div className="flex h-full p-4">
        {/* Sidebar - Job List */}
        <div className="w-1/3 bg-white p-4 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full p-2 border rounded mb-4"
          />
          <div className="space-y-4">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="p-4 border rounded cursor-pointer hover:bg-gray-200"
                onClick={() => navigate(`/job/${job.id}`)} // Redirect to JobDetailPage
              >
                <h3 className="font-semibold">{job.title}</h3>
                <p className="text-sm text-gray-600">{job.company}</p>
                <p className="text-sm text-gray-500">{job.location}</p>
                <p className="text-sm text-green-600">{job.salary}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Details */}
        <div className="w-2/3 p-4">
          {selectedJob ? (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold">{selectedJob.title}</h2>
              <p className="text-gray-700">{selectedJob.company}</p>
              <p className="text-gray-600">{selectedJob.location}</p>
              <p className="text-green-600">{selectedJob.salary}</p>
              <p className="mt-4 text-gray-500">{selectedJob.details}</p>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              Select a job to view details
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobListing;
