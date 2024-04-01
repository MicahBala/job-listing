/* eslint-disable react/prop-types */
import { FaLocationPin } from 'react-icons/fa6'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function JobsListings({ job }) {
  const [showFullDesc, setShowFullDesc] = useState(false)

  let desc = job?.description || ''

  if (!showFullDesc) {
    desc = desc.substring(0, 90) + '...'
  }

  return (
    <div className='job-card'>
      <small>{job?.type}</small>
      <h3>{job?.title}</h3>
      <p>
        {desc}
        <span
          className='show-full-desc'
          onClick={() => setShowFullDesc((pevState) => !pevState)}
        >
          {showFullDesc ? '..less' : 'more'}
        </span>
      </p>
      <small className='salary'>{job?.salaryRange} / Year</small>
      <div className='card-footer'>
        <div className='map'>
          <FaLocationPin /> {job?.location}.
        </div>
        <div className='read-more'>
          <Link to={`/job/${job?.id}`}>Read more</Link>
        </div>
      </div>
    </div>
  )
}

export default JobsListings
