import React from "react";

class JobListing extends React.Component {
  render() {
    return (
      <div key={this.props.idx}>
        <h2>Job Listing:</h2>
        <h3><a href={this.props.job.url}>{this.props.job.name}</a></h3>
        <p>{this.props.job.description}</p>
        <p>{this.props.job.location}</p>
      </div>
    );
  }
}

export default JobListing;
