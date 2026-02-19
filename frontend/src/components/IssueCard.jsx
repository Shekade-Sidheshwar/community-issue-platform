import React from "react";

function IssueCard({ issue }) {
  return (
    <div className="issue-card">
      <h4>{issue.title || "No Title"}</h4>
      <p>{issue.description}</p>
      <p>Status: {issue.status}</p>
      <p>Category: {issue.category}</p>
    </div>
  );
}

export default IssueCard;
