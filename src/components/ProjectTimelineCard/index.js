import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails

  return (
    <div>
      <img src={imageUrl} alt="project" className="img" />
      <div className="title-set">
        <h1>{projectTitle}</h1>
        <div className="pro-set">
          <AiFillCalendar color=" #1e293b" className="icon" />
          <p>{duration}</p>
        </div>
      </div>

      <p className="desc">{description}</p>
      <a href={projectUrl}>visit</a>
    </div>
  )
}

export default ProjectTimelineCard
