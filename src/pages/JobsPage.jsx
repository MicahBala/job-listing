import HomeCard from '../components/HomeCard'

function JobsPage() {
  return (
    <>
      <section className='jobs-area'>
        <div className='wrapper wrapper-job-area'>
          <h2>Browse Jobs</h2>
          <div className='content-job-area'>
            <HomeCard isHome={false} />
          </div>
        </div>
      </section>
    </>
  )
}

export default JobsPage
