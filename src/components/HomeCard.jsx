/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import JobsListings from './JobsListings'
import Spinner from './Spinner'

function HomeCard({ isHome = true }) {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const fetchResult = await fetch(
          'https://job-listing-backend-m4yh.onrender.com/jobs',
        )
        const res = await fetchResult.json()

        if (isHome) {
          res.data = res.data.slice(0, 3)
        }

        setJobs(res.data)
      } catch (error) {
        console.log('Error fetching data', error)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [isHome])

  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        jobs.map((job) => <JobsListings key={job._id} job={job} />)
      )}
    </>
  )
}

export default HomeCard
