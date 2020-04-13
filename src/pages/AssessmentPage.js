import React from "react";

export const AssessmentPage = () => {
  return (
    <div className="assessment-page">
      <div className="page-heading">
        <h3>Welcome to the SAFe DevOps Assessment</h3>
      </div>
      <div className="page-content">
        <form name="assessment-form">
          <div className="assess-form__steps"></div>
          <div className="assess-form__form-content"></div>
        </form>
      </div>
    </div>
  );
};