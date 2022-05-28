import React, { useState } from 'react';
import "./Experience.style.scss";
import { Job, list } from './job-list'

export default function Experience() {
  // eslint-disable-next-line
  const [jobList, setJobList] = useState<Array<Job>>(list);
  const [selectedJob, setSelectedJob] = useState<Job>(jobList[0]);

  const handleSelectJob = (event: any) => {
    const id = event.target.id;

    for (let job of jobList) {
      job.isSelected = false;
      if (job.id === id) {
        job.isSelected = true
        setSelectedJob(job);
      }
    }
  }

  return (
    <div className="experience-page">
      <div className="experience-wrapper">
        <h2 className="experience-page-header">
          Where I’ve Worked
        </h2>
        <div className='experience-page-body'>
          <ul className="work-places">
            {jobList.map(job => (
              <li id={job.id} key={job.id} className={job.isSelected ? "selected" : ""} onClick={handleSelectJob}>{job.companyName}</li>
            ))}
          </ul>
          <div className='job-description'>
            <div className='job-description-header'>
              <p className='job-title'>{selectedJob.jobTitle}</p>
              <p className='job-date'>{selectedJob.jobPeriod}</p>
            </div>
            <ul className='job-description-body'>
              {selectedJob.jobDescription.map((job, key) => (
                <li key={key}>{job}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
