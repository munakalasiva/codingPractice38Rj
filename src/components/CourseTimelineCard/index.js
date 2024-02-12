import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div>
      <div className="style">
        <h1>{courseTitle}</h1>
        <div className="dur-set">
          <AiFillClockCircle color="#1e293b" className="icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="desc">{description}</p>
      <ul className="list-items">
        {tagsList.map(tag => (
          <li key={tag.id} className="list-item">
            <p>{tag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
