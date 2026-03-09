import { Col } from "react-bootstrap"

export const ProjectCard = ({ imgUrl, title, description, github, live }) => {
    return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>
          <span>{github}</span>
          <span>{live}</span>
        </div>
      </div>
    </Col>
  )
}