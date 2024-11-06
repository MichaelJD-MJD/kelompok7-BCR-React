import { createLazyFileRoute, Link, useNavigate } from "@tanstack/react-router";
import plusIc from "../assets/icon/fi_plus.png";
import keyIc from "../assets/icon/fi_key.png";
import clockIc from "../assets/icon/fi_clock.png";
import trashIc from "../assets/icon/fi_trash-2.png";
import editIc from "../assets/icon/fi_edit.png";
import carImg from "../assets/car01.min.jpg";
import beepImg from "../assets/img-BeepBeep.png"
import "../styles/list-car.css";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid content-container p-3">
      <div className="row">
        <div className="col-10">
          <h3>List Car</h3>
        </div>
        <div className="col-2">
          <button className="btn add-btn">
            <img src={plusIc} alt="" />
            <span>
              <Link to={"/add-car"}>Add New Car</Link>
            </span>
          </button>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col d-flex p-0">
          <button className="btn size-filter ps-3 pe-3 p-2 m-2">All</button>
          <button className="btn size-filter ps-3 pe-3 p-2 m-2">Small</button>
          <button className="btn size-filter ps-3 pe-3 p-2 m-2">Medium</button>
          <button className="btn size-filter ps-3 pe-3 p-2 m-2">Large</button>
        </div>
      </div>
      <div className="row">
        <div className="col-3 mb-2 p-0">
          <div className="card">
            <img
              src={carImg}
              className="card-img-top card-img img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h6 className="card-title">Nama/Tipe Mobil</h6>
              <h5>Rp 430.000/hari</h5>
              <p className="card-text">
                <img src={keyIc} alt="" /> Start rent - Finish rent
              </p>
              <p>
                <img src={clockIc} alt="" /> Updated at 27 Oct 2024, 13:00
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="btn btn-primary delete-btn ps-4 pe-4 p-2 me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteConfirmation"
                >
                  <img src={trashIc} alt="" /> Delete
                </a>
                <Link
                  to={"/update-car"}
                  className="btn btn-primary edit-btn ps-4 pe-4 p-2"
                >
                  <img src={editIc} alt="" /> Edit
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-3 mb-2 p-0">
          <div className="card">
            <img
              src={carImg}
              className="card-img-top card-img img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h6 className="card-title">Nama/Tipe Mobil</h6>
              <h5>Rp 430.000/hari</h5>
              <p className="card-text">
                <img src={keyIc} alt="" /> Start rent - Finish rent
              </p>
              <p>
                <img src={clockIc} alt="" /> Updated at 27 Oct 2024, 13:00
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="btn btn-primary delete-btn ps-4 pe-4 p-2 me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteConfirmation"
                >
                  <img src={trashIc} alt="" /> Delete
                </a>
                <Link
                  to={"/update-car"}
                  className="btn btn-primary edit-btn ps-4 pe-4 p-2"
                >
                  <img src={editIc} alt="" /> Edit
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-3 mb-2 p-0">
          <div className="card">
            <img
              src={carImg}
              className="card-img-top card-img img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h6 className="card-title">Nama/Tipe Mobil</h6>
              <h5>Rp 430.000/hari</h5>
              <p className="card-text">
                <img src={keyIc} alt="" /> Start rent - Finish rent
              </p>
              <p>
                <img src={clockIc} alt="" /> Updated at 27 Oct 2024, 13:00
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="btn btn-primary delete-btn ps-4 pe-4 p-2 me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteConfirmation"
                >
                  <img src={trashIc} alt="" /> Delete
                </a>
                <Link
                  to={"/update-car"}
                  className="btn btn-primary edit-btn ps-4 pe-4 p-2"
                >
                  <img src={editIc} alt="" /> Edit
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-3 mb-2 p-0">
          <div className="card">
            <img
              src={carImg}
              className="card-img-top card-img img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h6 className="card-title">Nama/Tipe Mobil</h6>
              <h5>Rp 430.000/hari</h5>
              <p className="card-text">
                <img src={keyIc} alt="" /> Start rent - Finish rent
              </p>
              <p>
                <img src={clockIc} alt="" /> Updated at 27 Oct 2024, 13:00
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="btn btn-primary delete-btn ps-4 pe-4 p-2 me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteConfirmation"
                >
                  <img src={trashIc} alt="" /> Delete
                </a>
                <Link
                  to={"/update-car"}
                  className="btn btn-primary edit-btn ps-4 pe-4 p-2"
                >
                  <img src={editIc} alt="" /> Edit
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-3 mb-2 p-0">
          <div className="card">
            <img
              src={carImg}
              className="card-img-top card-img img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h6 className="card-title">Nama/Tipe Mobil</h6>
              <h5>Rp 430.000/hari</h5>
              <p className="card-text">
                <img src={keyIc} alt="" /> Start rent - Finish rent
              </p>
              <p>
                <img src={clockIc} alt="" /> Updated at 27 Oct 2024, 13:00
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="btn btn-primary delete-btn ps-4 pe-4 p-2 me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteConfirmation"
                >
                  <img src={trashIc} alt="" /> Delete
                </a>
                <Link
                  to={"/update-car"}
                  className="btn btn-primary edit-btn ps-4 pe-4 p-2"
                >
                  <img src={editIc} alt="" /> Edit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal For Delete Confirmation */}
      <div
        className="modal fade"
        id="deleteConfirmation"
        tabIndex="-1"
        aria-labelledby="deleteConfirmationLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="text-center">
                <img src={beepImg} alt="" className="w-50" />
                <h5>Menghapus Data Mobil</h5>
                <p>
                  Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin
                  ingin menghapus?
                </p>
              </div>
            </div>
            <div className="modal-footer d-flex align-items-center justify-content-center">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Tidak
              </button>
              <button type="button" className="btn btn-primary">
                Ya
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
