import * as React from 'react'
import { createLazyFileRoute, Link, useNavigate } from '@tanstack/react-router'
import "../styles/update-car.css";

export const Route = createLazyFileRoute('/update-car')({
  component: RouteComponent,
})

function RouteComponent() {
const navigate = useNavigate();

  return (
    <div className="container-fluid content-container-add p-3">
      <h3>Update Car</h3>
      <form encType="multipart/form-data" className="add-form p-3">
        <div className="mb-3 row">
          <label htmlFor="inputPlate" className="col-sm-2 col-form-label">
            Plate
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputPlate" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputManufacture" className="col-sm-2 col-form-label">
            Manufacture
          </label>
          <div className="col-sm-10">
            <select
              name="inputManufacture"
              id="inputManufacture"
              className="form-control form-select"
            >
              <option selected disabled>
                Select
              </option>
              <option value="manufacture id">Sedan</option>
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputModel" className="col-sm-2 col-form-label">
            Model
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputPlate" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputRentPerDay" className="col-sm-2 col-form-label">
            Rent Per Day
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              id="inputRentPerDay"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputCapacity" className="col-sm-2 col-form-label">
            Capacity
          </label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="inputCapacity" />
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
        <div className="mb-3 row">
          <label
            htmlFor="inputTransmission"
            className="col-sm-2 col-form-label"
          >
            Transmission
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputTransmission"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputAvailable" className="col-sm-2 col-form-label">
            Available
          </label>
          <div className="col-sm-10">
            <select
              name="inputAvailable"
              id="inputAvailable"
              className="form-control form-select"
            >
              <option selected disabled>
                Select
              </option>
              <option value={true}>True</option>
              <option value={false}>False</option>
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputType" className="col-sm-2 col-form-label">
            Type
          </label>
          <div className="col-sm-10">
            <select
              name="inputType"
              id="inputType"
              className="form-control form-select"
            >
              <option selected disabled>
                Select
              </option>
              <option value="Type id">Sedan</option>
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputYear" className="col-sm-2 col-form-label">
            Year
          </label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="inputYear" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputOptions" className="col-sm-2 col-form-label">
            Options
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputOptions" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputSpecs" className="col-sm-2 col-form-label">
            Specs
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputSpecs" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputImage" className="col-sm-2 col-form-label">
            Image
          </label>
          <div className="col-sm-10">
            <input type="file" className="form-control" id="inputImage" />
            <div className="form-text">File size max. 2MB</div>
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
