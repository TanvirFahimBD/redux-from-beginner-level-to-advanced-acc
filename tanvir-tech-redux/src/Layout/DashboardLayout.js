import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import DashBoardNavbar from "../pages/Shared/DashBoardNavbar";

const DashboardLayout = () => {
  return (
    <Container className="mx-0" style={{ minHeight: "100vh" }}>
      <Row>
        <Col sm={4} lg={2}>
          <DashBoardNavbar />
        </Col>
        <Col sm={8} lg={10}>
          <Outlet></Outlet>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardLayout;
