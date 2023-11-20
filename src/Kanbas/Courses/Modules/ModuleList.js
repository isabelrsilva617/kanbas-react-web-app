import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    client.findModulesForCourse(courseId).then((modules) =>
      dispatch(setModules(modules))
    );
  }, [courseId]);
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <>
      <ul className="list-group">
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <>
              <li
                key={index}
                className="list-group-item list-group-item-secondary"
              >
                <h3>{module.name}</h3>
              </li>
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between">
                  <div className="row w-100 d-flex justify-content-between flex-grow-1">
                    <div className="col ">
                      <p>{module.description}</p>
                      <p>{module.id}</p>
                    </div>
                    <div className="col d-flex  justify-content-end align-items-center flex-grow-0">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleDeleteModule(module._id)}
                        >
                        Delete
                      </button>
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => dispatch(setModule(module))}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </>
          ))}
      </ul>
      <ul className="list-group mb-4 mt-4">
        <input
          className="form-control"
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
        />
        <textarea
          className="form-control mt-1"
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
        <div className="d-flex mt-1">
          <button
            type="button"
            className="btn btn-success  flex-grow-1"
            onClick={
              handleAddModule
            }
          >
            Add
          </button>
          <button
            type="button"
            className="btn btn-primary  flex-grow-1 ms-1"
            onClick={() => {
              dispatch(updateModule(module));
            }}
          >
            Update
          </button>
        </div>
      </ul>
    </>
  );
}
export default ModuleList;
