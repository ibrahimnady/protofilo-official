import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {VscJson} from "react-icons/vsc"
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiNodejsSmall,
  DiMongodb,
  DiPhotoshop,
  DiMysql,
  DiSass,
  DiCss3,
  DiHtml5,
  DiIllustrator,
  
  DiGit,
} from "react-icons/di";
import {
  // SiPytorch,
  // SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 style={{color:"#dd4b25"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 style={{color:"#254bdd"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSass style={{color:"#ca6296"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 style={{color:"#f7df1e"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs style={{color:"#00ff08"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscJson style={{color:"#f7df1e"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejsSmall style={{color:"#00ff08"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact style={{color:"#00d8ff"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs style={{color:"#00d8ff"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb style={{color:"#34be5b"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql style={{color:"#f29111"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit style={{color:"#bd2c00"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhotoshop style={{color:"#00a4e4"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIllustrator style={{color:"#fbb034"}}/>
      </Col>
    </Row>
  );
}

export default Techstack;
