import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img-self1.png";
import projImg5 from "../assets/img/project-img-self2.png";
import projImg6 from "../assets/img/project-img-self3.png";
import projImg7 from "../assets/img/project-img-ml1.png";
import projImg8 from "../assets/img/project-img-ml2.png";
import projImg9 from "../assets/img/project-img-ml3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Toyadhi",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "MakeMyBrain",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Sumz",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  const projects2 = [
    {
      title: "Search Engine",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Blogify",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "LingoPedia",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];
  

  const projects3 = [
    {
      title: "Facial Expression Recognition",
      description: "ML Development",
      imgUrl: projImg7,
    },
    {
      title: "Movie Recommendation System",
      description: "ML Development",
      imgUrl: projImg8,
    },
    {
      title: "Interctive Digit Guessing",
      description: "ML Development",
      imgUrl: projImg9,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>PROJECTS</h2>
                <p>My experience in frontend development encompasses a wide range of technologies, including
                    ReactJS, NextJS, JavaScript, CSS, Bootstrap, Tailwind CSS, and HTML. Additionally, I possess proficiency in
                    backend technologies such as NodeJS and Flask. In the realm of programming, I am adept at
                    C++ data structures and algorithms, and actively exploring machine learning.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <h2> Work Experience</h2>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <h2>Self Projects</h2>
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h2>ML Projects</h2>
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
