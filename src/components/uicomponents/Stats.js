import React from "react";
// import circle from "../../assets/img/circle.svg";
import circle from "../../assets/img/icon.png"; 

export default function Stats() {
  return (
    <div className="row stats-wrap mt-2">
      {/* <div className="page-header">
        <h3 className="page-title"> 
          <span className="page-title-icon bg-gradient-violet text-white me-2">
            <i className="bi bi-speedometer2"></i>
          </span>{" "}
          Dashboard
        </h3>
      </div> */}
      <div className="col-md-4 stretch-card grid-margin mb-2">
        <div
          className="card bg-gradient-violet card-img-holder text-white"
        >
          <div className="card-body text-center card1">
            <img src={circle} className="card-img-absolute" alt="circle" />
            <h5 className="card-text mt-3">
              <i className="bi bi-file-earmark-person mdi-24px float-right"></i>  
            </h5>
            <h5 className="font-weight-normal mb-1"> Total No.Of Applications</h5>
            <h2 className="mb-1">1600</h2>
          </div>
        </div>
      </div>
      <div className="col-md-4 stretch-card grid-margin mb-2">
        <div
          className="card bg-gradient-light-green card-img-holder text-white"
        >
          <div className="card-body text-center card1">
            <img src={circle} className="card-img-absolute" alt="circle" />
            <h5 className="card-text mt-3">
              <i className="bi bi-file-earmark-check mdi-24px float-right"></i>
            </h5>
            <h5 className="font-weight-normal mb-1"> Completed Applications</h5>
            <h2 className="mb-1">1200</h2>
          </div>
        </div>
      </div>
      <div className="col-md-4 stretch-card grid-margin mb-2">
        <div
          className="card bg-gradient-red card-img-holder text-white"
        >
          <div className="card-body text-center card1">
            <img src={circle} className="card-img-absolute" alt="circle" />
            <h5 className="card-text mt-3">
              <i className="bi bi-clock-history mdi-24px float-right"></i> 
            </h5>
            <h5 className="font-weight-normal mb-1"> Pending Applications</h5>
            <h2 className="mb-1 blink">400</h2>
          </div> 
        </div>
      </div>
      
      {/* <div className="col-md-4 stretch-card grid-margin mb-2">
        <div
          className="card bg-gradient-light-green card-img-holder text-white"
        >
          <div className="card-body text-center card1">
            <img src={circle} className="card-img-absolute" alt="circle" />
            <h5 className="card-text mt-3">
              <i className="bi bi-file-earmark-check mdi-24px float-right"></i>
            </h5>
            <h5 className="font-weight-normal mb-1"> PDS Matched Records</h5>
            <h2 className="mb-1">3,345,148</h2>
          </div>
        </div>
      </div>

      <div className="col-md-4 stretch-card grid-margin mb-2">
        <div
          className="card bg-gradient-red card-img-holder text-white"
        >
          <div className="card-body text-center card1">
            <img src={circle} className="card-img-absolute" alt="circle" />
            <h5 className="card-text mt-3">
              <i className="bi bi-file-earmark-excel mdi-24px float-right"></i>
            </h5>
            <h5 className="font-weight-normal mb-1"> PDS Unmatched Records</h5>
            <h2 className="mb-1 blink">281,111</h2>
          </div>
        </div>
      </div> */}




  







    </div> 
  );
}
