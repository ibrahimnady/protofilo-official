import React from "react";
import { Col, Row } from "react-bootstrap";
import {BsTerminalFill} from "react-icons/bs"
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiNpm,
  SiGithub,
  SiKalilinux,
  SiUbuntu
} from "react-icons/si";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux style={{color:"#34be5b"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux style={{color:"#2777ff"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu style={{color:"#dd4814"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub style={{color:"#f5f5f5"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsTerminalFill style={{color:"#999999"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode style={{color:"#14acf2"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman style={{color:"#ef5b25"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNpm style={{color:"#cb3837"}}/>
      </Col>
    </Row>
  );
}

export default Toolstack;
