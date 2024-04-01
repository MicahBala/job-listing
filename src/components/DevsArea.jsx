import { Link } from 'react-router-dom'

function DevsArea() {
  return (
    <section>
      <div className='wrapper devs-area'>
        <div className='card devs'>
          <h3>For Developers</h3>
          <p>Browse our React jobs and start your career today</p>
          <Link to='/jobs' className='btn btn-jobs'>
            Browse Jobs
          </Link>
        </div>
        <div className='card employers'>
          <h3>For Employers</h3>
          <p>List your job to find the perfect developer for the role</p>
          <Link to='/add-jobs' className='btn btn-emp'>
            Add Jobs
          </Link>
        </div>
      </div>
    </section>
  )
}

export default DevsArea
