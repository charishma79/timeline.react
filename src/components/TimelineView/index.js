// Write your code here

import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const renderTimelineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }

  return (
    <div className="bg-container">
      <h1 className="heading">
        MY JOURNEY OF <br />
        <span className="title"> CCBP 4.0</span>
      </h1>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={timelineItemsList}
        theme={{
          primary: '#0967d2',
          secondary: '#ffffff',
          cardBgColor: '#ffffff',
          cardForeColor: '#ffffff',
          titleColor: '#1e294b',
        }}
      >
        {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
      </Chrono>
    </div>
  )
}

export default TimelineView
