import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    duration,
    description,
    projectUrl,
  } = projectDetails
  return (
    <div className="projects-container">
      <img src={imageUrl} alt="project" className="image" />
      <div className="project-duration-container">
        <h1 className="name">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar className="icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="detail">{description}</p>
      <a href={projectUrl} className="link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
