import { useState, useEffect } from "react";
import "./NewJobForm.css";
import * as jobsService from "../../utilities/jobs-service";

export default function NewJobForm({ jobs, setJobs }) {
  const [newJob, setNewJob] = useState({
    jobTitle: "",
    companyName: "",
    status: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    setNewJob({ ...newJob, [event.target.name]: event.target.value });
    setError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setJobs([...jobs, newJob]);
    const createdJob = await jobsService.create(newJob);

    console.log(createdJob);

    // Add the newly created job to the jobs state
    setJobs((prevJobs) => [...prevJobs, createdJob]);

    // Clear the New Job form on submission
    setNewJob({
      jobTitle: "",
      companyName: "",
      status: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="jobTitle"
        value={newJob.jobTitle}
        onChange={handleChange}
        placeholder="Job Title"
      />
      <input
        type="text"
        name="companyName"
        value={newJob.companyName}
        onChange={handleChange}
        placeholder="Company Name"
      />
      <input
        type="text"
        name="status"
        value={newJob.description}
        onChange={handleChange}
        placeholder="Type a short description"
      />
      <input
        type="date"
        name="status"
        value={newJob.submissionDate || ""}
        onChange={handleChange}
        placeholder="Submission Date"
      />
      <input
        type="text"
        name="status"
        value={newJob.salary}
        onChange={handleChange}
        placeholder="Salary/Range"
      />
      <input
        type="text"
        name="status"
        value={newJob.followUpDate}
        onChange={handleChange}
        placeholder="Follow Up Date"
      />
      <select
        name="status"
        value={newJob.status}
        onChange={handleChange}
        placeholder="Application Status"
      >
        <option value="">Select status</option>
        <option value="Applied">Applied</option>
        <option value="Pending Follow-up">Pending Follow-up</option>
        <option value="Interview Scheduled">Interview Scheduled</option>
        <option value="Rejected">Rejected</option>
      </select>
      
      <button type="submit">ADD JOB</button>
    </form>
  );
}
