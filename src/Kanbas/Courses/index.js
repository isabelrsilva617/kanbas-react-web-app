import { useState, useEffect } from "react";
import axios from "axios";

import { FaBars } from "react-icons/fa";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import "./index.css";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";

function Courses() {
  const { courseId } = useParams();
  const URL = "http://localhost:4000/api/courses";

  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  const pathName = useLocation();
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  console.log(pathName);
  return (
    <>
      <div className="kb-flex-col-container">
        <div className="row d-flex align-items-center pb-4 pt-4 border-bottom ">
          <div className="col d-flex">
          <FaBars className="ms-4" aria-hidden="true" />
          <nav
            className="ms-4"
            style={{ "--bs-breadcrumb-divider": "'>'" }}
            aria-label="breadcrumb"
          >
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a className="links" href="#">
                  {course.name}
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {pathName.pathname.split("/")[4]}
              </li>
            </ol>
          </nav>
          </div>
        </div>

        <div className="kb-flex-col-container">
          <div className="kb-flex-row-container">
            <CourseNavigation />

            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route
                path="Assignments/:assignmentId"
                element={<AssignmentEditor />}
              />
              <Route path="Grades" element={<h1>Grades</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
export default Courses;
