import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const params = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="kb-flex-col-container">
      <div className="kb-flex-row-container">
        <div className="kb-flex-col-container ms-2 me-2">
          <h2>Assignment Name</h2>

          <input value={assignment.title} className="form-control mb-2" />
          <Link
            to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger"
          >
            Cancel
          </Link>
          <button onClick={handleSave} className="btn btn-success me-2">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AssignmentEditor;
