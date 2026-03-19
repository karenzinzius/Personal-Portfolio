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
import projImg5 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("projects.travel.title"),
      description: t("projects.travel.desc"),
      github: "https://github.com/karenzinzius/Travel-Agency",
      live: "https://travel-agency-1xtc.onrender.com",
      imgUrl: projImg5,
    },
    {
      title: t("projects.event.title"),
      description: t("projects.event.desc"),
      github: "https://github.com/karenzinzius/event-scheduler",
      live: "https://eventscheduler-81mw.onrender.com",
      imgUrl: projImg4,
    },
    {
      title: t("projects.journal.title"),
      description: t("projects.journal.desc"),
      github: "https://github.com/karenzinzius/travelJournal",
      imgUrl: projImg3,
    },
    {
      title: t("projects.coffee.title"),
      description: t("projects.coffee.desc"),
      github: "https://github.com/karenzinzius/coffee-shop",
      live: "https://karenzinzius.github.io/coffee-shop/",
      imgUrl: projImg1,
    },
    {
      title: t("projects.diary.title"),
      description: t("projects.diary.desc"),
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
                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                  <h2>{t("projects.title")}</h2>
                  <p>{t("projects.description")}</p>

                  {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} index={index} />
                  ))}
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