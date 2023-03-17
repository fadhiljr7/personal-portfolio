import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img7.png";
import projImg2 from "../assets/img/project-img8.png";
import projImg3 from "../assets/img/project-img9.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Bad Habits Analyst",
      description: "Webinar, Motivation, and Data Dashboard",
      imgUrl: projImg4,
      link: "https://docs.google.com/presentation/d/1-Llew-dPTz_044ruzw_Z390B1PA0a2hdeUUypWkjEcc/edit?usp=sharing",
    },
    {
      title: "My Own Workshop",
      description: "Data Analyst 101",
      imgUrl: projImg5,
      link: "https://www.linkedin.com/posts/mufiiin_its-not-easy-to-be-a-speaker-for-the-first-activity-7003210141055533056-dbIS?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "Sign Language Detection",
      description: "Tensorflow & OpenCV Implementation",
      imgUrl: projImg6,
      link: "https://drive.google.com/file/d/1DnD8qJOhzXOFgTjxU5AYHRGTlWCE4XDk/view?usp=share_link",
    },
    {
      title: "virtual assistant",
      description: "Simple Deep Learning Implementation",
      imgUrl: projImg1,
      link: "https://youtu.be/Hpb1eNfat94",
    },
    {
      title: "SKlearn Algorithm Comparison",
      description: "Decision Tree, SVM, and Gausian NB",
      imgUrl: projImg2,
      link: "https://youtu.be/ujdh1uiVaQI",
    },
    {
      title: "Decision Tree",
      description: "Simple Machine Learning Implementation",
      imgUrl: projImg3,
      link: "https://youtu.be/0IBMFaVvFQ8",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Welcome to the My Projects page! Here you can find various projects that I have worked on as a data analyst. You can see how I apply my data analysis skills to generate valuable insights and solve complex business problems. I am very excited to share with you these projects and give an idea of my skills as a data analyst.</p>
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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