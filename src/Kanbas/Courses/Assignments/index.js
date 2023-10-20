import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div className="kb-flex-col-container">
      <div className="kb-flex-row-container">
        <div className="kb-flex-col-container ms-2 me-2">
          <div className="list-group">
            <div className="list-group-item list-group-item-secondary">
              Assignments
            </div>
            {courseAssignments.map((assignment) => (
              <Link
                key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                className="list-group-item"
              >
                {assignment.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Assignments;
