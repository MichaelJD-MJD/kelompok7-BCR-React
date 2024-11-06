import * as React from 'react'
import { createLazyFileRoute, Link, useNavigate } from '@tanstack/react-router'
import "../styles/add-car.css";

export const Route = createLazyFileRoute('/add-car')({
  component: RouteComponent,
})

function RouteComponent() {
const navigate = useNavigate();

  return (
    <div className="container-fluid content-container-add p-3">
      <h3>Add New Car</h3>
      <form encType="multipart/form-data" className="add-form p-3">
        <div className="mb-3 row">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Ford"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPrice" className="col-sm-2 col-form-label">
            Price
          </label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="inputPrice" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPicture" className="col-sm-2 col-form-label">
            Picture
          </label>
          <div className="col-sm-10">
            <input type="file" className="form-control" id="inputPicture" />
            <div className="form-text">File size max. 2MB</div>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputDescription" className="col-sm-2 col-form-label">
            Description
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputDescription" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputAvailableAt" className="col-sm-2 col-form-label">
            Available At
          </label>
          <div className="col-sm-10">
            <input type="date" className="form-control" id="inputAvailableAt" />
          </div>
        </div>
        <div className="action-btn">
          <button type="button" className="btn btn-danger">
            <Link to={"/"}>Cancel</Link>
          </button>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
