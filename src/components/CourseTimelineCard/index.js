import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, duration, description, tagsList} = courseDetails
  return (
    <div className="course-details-container">
      <div className="course-duration-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle className="icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="detail">{description}</p>
      <div className="tags-container">
        {tagsList.map(eachTag => (
          <p className="tag">{eachTag.name}</p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
