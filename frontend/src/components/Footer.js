import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <col className="text-center py-3">Copyright &copy; Team2</col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
