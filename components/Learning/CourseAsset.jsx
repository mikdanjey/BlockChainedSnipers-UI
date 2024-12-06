import React from "react";

const CourseAsset = () => {
  return (
    <>
      <div className="courses-details-desc-style-two">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6">
            <div className="card text-center">
              <i
                className="bx bx-file mt-2"
                style={{
                  fontSize: "100px",
                }}
              ></i>
              <div className="card-body">
                <h5 className="card-title">Lecture name</h5>
                <button className="btn btn-success mt-2">
                  Download <i className="bx bx-down-arrow-circle"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="text-center border p-3 fs-6">Empty</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseAsset;
