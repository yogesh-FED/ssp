import React from "react";

export default function Grid() {
  return (
    <div className="row">
      <div className="generalInfo mb-3 col-lg-12">
        <h4 className="card-title text-violet">
          <i className="mdi mdi-eye"></i> Project Information
        </h4>
        <div className="card">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th> S.No </th>
                    <th> Project Name </th>
                    <th> Start Date </th>
                    <th>Project Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> 01 </td>
                    <td> Project Name A </td>
                    <td>01/08/2022</td>
                    <td>
                      <span className="badge text-bg-success">Completed</span>
                    </td>
                  </tr>
                  <tr>
                    <td> 02 </td>
                    <td> Project Name B </td>
                    <td>18/08/2022</td>
                    <td>
                      <span className="badge text-bg-danger">Not Started</span>
                    </td>
                  </tr>
                  <tr>
                    <td> 03 </td>
                    <td> Project Name C </td>
                    <td>20/08/2022</td>
                    <td>
                      <span className="badge text-bg-warning">In-Progress</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
