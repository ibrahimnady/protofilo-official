import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import crud_system from "../../Assets/Projects/Crud-system.png"
import e_commerce from "../../Assets/Projects/E-comerce.png"
import protofilo from "../../Assets/Projects/protofilo-img.png"
import movi_nexo from "../../Assets/Projects/Movi_nexo.png"
import system_salse from "../../Assets/Projects/System-Salse.png"
import dashboard from "../../Assets/Projects/Dashboard.png"
import crud_system_v2 from "../../Assets/Projects/Crud-system-v2.png"
import dashboard_control from "../../Assets/Projects/Dashboard-Control.png"
import card_name from "../../Assets/Projects/curd-name.png"
import Registration_page from "../../Assets/Projects/Registration-page.png"
import protofilo_v_1 from "../../Assets/Projects/protofilo-V-1.png"
import protofilo_v_2 from "../../Assets/Projects/protofilo-v-2.png"
import game from "../../Assets/Projects/game.png"
import begginer_projects from "../../Assets/Projects/begginerProjects.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Dashboard"
              description="This Site Was Created by html , css , react.js , bootstrap , reactstrap and fontawesome"
              ghLink="https://github.com/ibrahimnady/Dashboard.git"
              demoLink="https://ibrahimnady.github.io/Dashboard/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard_control}
              isBlog={false}
              title="Dashboard-Control"
              description="This Site Was Created by html , sass , react.js , bootstrap , reactstrap , Mui and fontawesome"
              ghLink="https://github.com/ibrahimnady/Dashboard-control.git"
              demoLink="https://ibrahimnady.github.io/Dashboard-control/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={system_salse}
              isBlog={false}
              title="System Salse"
              description="This Site Was Created by html , css , react.js , bootstrap , reactstrap and fontawesome"
              ghLink="https://github.com/ibrahimnady/System-Salse.git"
              demoLink="https://ibrahimnady.github.io/System-Salse/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crud_system}
              isBlog={false}
              title="Crud System"
              description="This Site Was Created by html , css , js , bootstrap  and fontawesome"
              ghLink="https://github.com/ibrahimnady/crud-system-v-1.git"
              demoLink="https://ibrahimnady.github.io/crud-system-v-1/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Registration_page}
              isBlog={false}
              title="Registration Page"
              description="This Site Was Created by html , css , js "
              ghLink="https://github.com/ibrahimnady/Registration-page.git"
              demoLink="https://ibrahimnady.github.io/Registration-page/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crud_system_v2}
              isBlog={false}
              title="Crud System V-2"
              description="This Site Was Created by html , css , js , bootstrap  and fontawesome"
              ghLink="https://github.com/ibrahimnady/crud-system-v-2.git"
              demoLink="https://ibrahimnady.github.io/crud-system-v-2/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={card_name}
              isBlog={false}
              title="Card Name "
              description="This Site Was Created by html , css , js , bootstrap  and fontawesome"
              ghLink="https://github.com/ibrahimnady/crud-name.git"
              demoLink="https://ibrahimnady.github.io/crud-name/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movi_nexo}
              isBlog={false}
              title="Movie Nexo"
              description="This Site Was Created by html , css , react.js , bootstrap and fontawesome"
              ghLink="https://github.com/ibrahimnady/movie-nexo-website.git"
              demoLink="https://ibrahimnady.github.io/movie-nexo-website/"      
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movi_nexo}
              isBlog={false}
              title="Movie Nexo-App"
              description="This App Was Created by html , css , react.js , bootstrap , electron.js and fontawesome"
              ghLink="https://github.com/ibrahimnady/movie-noxe-app.git"
              demoLink="https://ibrahimnady.github.io/movie-nexo-website/"      
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={e_commerce}
              isBlog={false}
              title="E-Commerce"
              description="This Site Was Created by html , css , react.js , bootstrap , reactstrap and fontawesome"
              ghLink="https://github.com/ibrahimnady/E-commerce.git"
              demoLink="https://ibrahimnady.github.io/E-commerce/"      
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={protofilo_v_1}
              isBlog={false}
              title="Protofilo V-1"
              description="This Site Was Created by html , css , js and fontawesome "
              ghLink="https://github.com/ibrahimnady/protofilo-V-1.git"
              demoLink="https://ibrahimnady.github.io/protofilo-V-1/"      
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={protofilo_v_2}
              isBlog={false}
              title="Protofilo V-2"
              description="This Site Was Created by html , css , js and fontawesome "
              ghLink="https://github.com/ibrahimnady/protofilo-v-2.git"
              demoLink="https://ibrahimnady.github.io/protofilo-v-2/"      
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={protofilo}
              isBlog={false}
              title="Protofilo"
              description="This Site Was Created by html , css , react.js ,bootstrap ,reactIcons , reactstrap and fontawesome"
              ghLink="https://github.com/ibrahimnady"
              demoLink="https://ibrahimnady.github.io/protofilo-official/"      
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Game XO"
              description="This Site Was Created by html , css ,js ,bootstrap and fontawesome"
              ghLink="https://github.com/ibrahimnady/game-xo.git"
              demoLink="https://ibrahimnady.github.io/game-xo/"      
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={begginer_projects}
              isBlog={false}
              title="Begginer Projects"
              description="This Site Was Created by html , css ,js ,bootstrap and fontawesome"
              ghLink="https://github.com/ibrahimnady/begginer-projects.git"
              demoLink="https://ibrahimnady.github.io/begginer-projects/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
