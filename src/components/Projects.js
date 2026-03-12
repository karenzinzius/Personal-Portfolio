import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Travel Agency",
      description: "Frontend travel website built with JavaScript.",
      github: "https://github.com/karenzinzius/Travel-Agency",
      live: "https://travel-agency-1xtc.onrender.com",
      imgUrl: projImg1,
    },
    {
      title: "Event Scheduler",
      description:
        "Web app with API integration built using TypeScript. Allows users to create, manage, and organize events in a simple and user-friendly interface.",
      github: "https://github.com/karenzinzius/event-scheduler",
      live: "https://eventscheduler-81mw.onrender.com",
      imgUrl: projImg4,
    },
    {
      title: "Travel Journal",
      description:
        "Frontend single-page application with Authentication and authorization service and Backend API for business logic and data handling.",
      github: "https://github.com/karenzinzius/travelJournal",
      // live: "LIVE_LINK",
      imgUrl: projImg3,
    },
     {
      title: "Coffee Shop",
      description: "Semantic website built with HTML and CSS.",
      github: "https://github.com/karenzinzius/coffee-shop",
      live: "https://karenzinzius.github.io/coffee-shop/",
      imgUrl: projImg1,
    },
    {
      title: "Personal Diary",
      description:
        "Single Page Application (SPA) built with React and Vite.The application allows users to write, view, and manage personal diary entries in a simple and clean interface.",
      github: "https://github.com/karenzinzius/My-Personal-Diary",
      live: "https://daily-thoughts-61xk.onrender.com",
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""}>
                  <h2>Projects</h2>
                  <p>
                    The following projects showcase my practical experience
                    developing modern web applications, from responsive user
                    interfaces to scalable backend systems.
                  </p>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} index={index} />;
                          })}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
