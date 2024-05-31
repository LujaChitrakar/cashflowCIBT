import React from "react";
import Table from "../Table";

const Dashboard = () => {
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-6">
            <div className="small-box bg-info">
              <div className="inner">
                <h3>150</h3>
                <p>New Orders</p>
              </div>
              <div className="icon">
                <i className="ion ion-bag"></i>
              </div>
              <a href="#" className="small-box-footer">
                More info <i className="fas fa-arrow-circle-right"></i>
              </a>
            </div>

            <div className="small-box bg-info">
              <div className="inner">
                <h3>Table</h3>

                <Table />
              </div>
              <div className="icon">
                <i className="ion ion-bag"></i>
              </div>
              <a href="#" className="small-box-footer">
                More info <i className="fas fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
