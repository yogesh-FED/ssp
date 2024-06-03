import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function BarChart() {
  // chart 1 starts
  const [options] = useState({
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jly",
        "Aug",
        "Sep",
      ],
    },
  });
  const [series] = useState([
    {
      name: "series-1",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ]);
  // chart 1 ends
  // chart 1 starts
  const [options1] = useState({
    chart: {
      id: "apexchart-example1",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jly",
        "Aug",
        "Sep",
      ],
    },
  });
  const [series1] = useState([
    {
      name: "series-1",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ]);
  // chart 1 ends
  return (
    <div className="row">
      {/* chart 1 starts */}
      <div className="generalInfo mt-3 mb-3 col-lg-6">
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-violet text-white me-2">
              <i className="bi bi-bar-chart"></i>
            </span>{" "}
            Chart 1
          </h3>
        </div>
        <div className="card">
          <div className="card-body">
            <Chart
              options={options}
              series={series}
              type="bar"
              width={500}
              height={320}
            />
          </div>
        </div>
      </div>
      {/* Chart 1 ends */}
      {/* chart 2 starts */}
      <div className="generalInfo mt-3 mb-3 col-lg-6">
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-violet text-white me-2">
              <i className="bi bi-bar-chart-fill"></i>
            </span>{" "}
            Chart 2
          </h3>
        </div>
        <div className="card">
          <div className="card-body">
            <Chart
              options={options1}
              series={series1}
              type="bar"
              width={500}
              height={320}
            />
          </div>
        </div>
      </div>
      {/* chart 2 ends */}
    </div>
  );
}
