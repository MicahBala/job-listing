/* eslint-disable react/prop-types */
import JobsListings from './JobsListings'
import jobs from '../jobs.json'

function HomeCard({ isHome = true }) {
  const jobListings = isHome ? jobs.slice(0, 3) : jobs

  return (
    <>
      {jobListings.map((job) => (
        <JobsListings key={job.id} job={job} />
      ))}
    </>
  )
}

export default HomeCard
