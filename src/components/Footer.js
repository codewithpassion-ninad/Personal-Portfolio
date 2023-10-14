import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Footer()
{
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="5" className="footer-copywright">
          <h5>Designed and Developed by Ninad Nilesh Sugandhi</h5>
        </Col>
        {/* <Col md="4" className="footer-copywright">
          <h5>Copyright © {year} NNS</h5>
        </Col> */}
      </Row>
    </Container>
  );
}

export default Footer;