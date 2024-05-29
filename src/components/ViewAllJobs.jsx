import { Link } from 'react-router-dom'

function ViewAllJobs() {
  return (
    <section className='wrapper view-all-jobs'>
      <Link to='/jobs' className='btn btn-view-jobs'>
        View All Jobs
      </Link>
    </section>
  )
}

export default ViewAllJobs
