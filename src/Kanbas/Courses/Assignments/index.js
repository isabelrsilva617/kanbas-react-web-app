import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  function visitPage(){
    window.location=`/Kanbas/Courses/${courseId}/Assignments/${courseAssignments[Object.keys(courseAssignments)[0]]._id}`;
}
  console.log("here",courseAssignments[Object.keys(courseAssignments)[0]]);
  return (

    <div className="col">
      <div className="row">
        <div className="col m-1">
          <div className="row d-flex justify-content-end  me-1">
            <button type="button" className="btn btn-danger w-25" onClick={visitPage}>
              Add Assignment
            </button>
          </div>
          <hr />
          <div className="row m-1">
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
    </div>
  );
}
export default Assignments;
