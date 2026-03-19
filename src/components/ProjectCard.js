export const ProjectCard = ({ imgUrl, title, description, github, live, index }) => {
    return (
    
      <div className={`project-row ${index % 2 !== 0 ? "reverse" : ""}`}>

        <div className="project-image">
        <img src={imgUrl} alt={title} />
        </div>

        <div className="proj-text">
          <h4>{title}</h4>
          <p>{description}</p>
          <a href={github} target="_blank">GitHub</a>
          <a href={live} target="_blank">DemoLive</a>
        </div>

      </div>
    
  )
}