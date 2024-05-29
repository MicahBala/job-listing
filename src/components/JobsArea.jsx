import HomeCard from './HomeCard'

function JobsArea() {
  return (
    <>
      <section className='jobs-area'>
        <div className='wrapper wrapper-job-area'>
          <h2>Recent Jobs</h2>
          <div className='content-job-area'>
            <HomeCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default JobsArea
