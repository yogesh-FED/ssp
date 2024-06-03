import React, { useState } from "react";
import Sidenav from "./Sidenav";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StudentGrid from "./Grid/StudentGrid";
import Banner from "./Banner/Banner";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dashboard from "./Dashboard/Dashboard";
import Student from "./Student/Student";
import MainLayout from "./MainLayout/MainLayout";

const Home = () => {
  const [isDashShow, setIsDashShow] = useState(true);
  const handleDashValueChange = (newValue) => {
    setIsDashShow(newValue);
  };
  return (
    <MainLayout compName={'studentComponent'}>
      <div>
        <Container fluid>
          <Row>
            <Col lg={12}>
            <h3 className="page-title mb-2">
      <span className="page-title-icon bg-gradient-violet text-white me-2">
        <i className="bi bi-pencil-square"></i>
      </span> Student Profile
    </h3>
              {/* <Header 
                onDashValueChange={handleDashValueChange}
              /> */}
              {/* <Banner /> */}
              <Student />
              {/* {
                isDashShow ? <StudentGrid /> : <Dashboard />
              }             */}
            </Col>
          </Row>
        </Container>
          {/* <Sidenav/> */}   
      </div>
    </MainLayout>
  );
};

export default Home;
