import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import { useState } from "react";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div className="col">
      <div className="d-flex row ms-4 pt-4">
        <h1 className="m-0">Dashboard</h1>
      </div>
      <hr />
      <div className="d-flex row ms-4 pt-4 border-bottom">
        <h2 className="m-0">Published Courses ({courses.length})</h2>
      </div>
      <div className="row d-flex input">
        <h5>Course</h5>
        <input
          value={course.name}
          className="form-control"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <input
          value={course.number}
          className="form-control"
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
        />
        <input
          value={course.startDate}
          className="form-control"
          type="date"
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        />
        <input
          value={course.endDate}
          className="form-control"
          type="date"
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
        />

        <div className="course-buttons  w-50">
          <button type="button" className="btn btn-success" onClick={addNewCourse}>
            Add
          </button>
          <button type="button" className="btn btn-primary" onClick={updateCourse}>
            Update
          </button>
        </div>
      </div>
      <div className="row m-0">
        {courses.map((course) => (
          <div className="col-md-auto" key={course._id}>
            <div className="card">
              <Link  to={`/Kanbas/Courses/${course._id}`}>
                <div className="col card-body">
                  <h5 className="row card-title">{course.name}</h5>
                  <div className="row course-buttons">
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
