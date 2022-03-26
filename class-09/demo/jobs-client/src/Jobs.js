import React from "react";
import JobListing from './JobListing';

class Jobs extends React.Component {
  render() {
    return (
      this.props.jobs.map((job, idx) => (
        <JobListing 
          job={job}
          idx={idx}
        />
      ))
    )
  }
}

export default Jobs;
