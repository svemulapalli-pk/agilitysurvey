import React from "react";
import AssessmentTabs from "../components/AssessmentTabs";

const AssessmentPage = () => {
  return (
    <div className="assessment-page">
      <div className="page-heading">
        <h3>Welcome to the SAFe DevOps Assessment</h3>
      </div>
      <div className="page-content">
        <div name="assessment-form-wrapper">
          <AssessmentTabs />
        </div>
      </div>
    </div>
  );
};

export default AssessmentPage;
