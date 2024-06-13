import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { IoArrowBackSharp } from 'react-icons/io5'
import { FaLocationPin } from 'react-icons/fa6'
import { toast } from 'react-toastify'

import Spinner from '../components/Spinner'

function SingleJobPage() {
  const [singleJob, setSingleJob] = useState(null)
  const [loading, setLoading] = useState(true)

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const result = await fetch(
          `https://job-listing-backend-m4yh.onrender.com/jobs/${id}`,
        )
        const res = await result.json()
        setSingleJob(res.data)
      } catch (error) {
        console.log('Error fetching data', error)
      } finally {
        setLoading(false)
      }
    }

    fetchSingleJob()
  }, [id])

  const deleteJob = async () => {
    const confirm = window.confirm('Are you sure you want to delete this job?')
    if (!confirm) return
    setLoading(true)
    try {
      const result = await fetch(
        `https://job-listing-backend-m4yh.onrender.com/jobs/${id}`,
        {
          method: 'DELETE',
        },
      )

      if (!result.ok) {
        throw new Error('Something went wrong. Please try again later.')
      }

      toast.success('Job deleted successfuly')

      navigate('/jobs')
    } catch (error) {
      console.log('Error deleting job', error)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  // const handleEdit = () => {
  //   navigate(`/edit-job/${id}`)
  // }

  return loading ? (
    <Spinner />
  ) : (
    <div className='single-job'>
      <div className='back-arrow'>
        <div className='wrapper'>
          <Link to='/jobs'>
            <IoArrowBackSharp /> Back to Job Listings
          </Link>
        </div>
      </div>
      <div className='wrapper single-job-content'>
        <div className='single-job-main-content'>
          <div className='single-job-title'>
            <small className='single-job-type'>{singleJob.jobType}</small>
            <h2>{singleJob.title}</h2>
            <small className='single-job-location'>
              <FaLocationPin /> {singleJob.location}
            </small>
          </div>
          <div className='single-job-description'>
            <p className='single-job-desc-title'>Job Description</p>
            <p className='single-job-desc'>{singleJob.description}</p>
            <p className='single-job-salary'>Salary: {singleJob.salaryRange}</p>
          </div>
        </div>
        <div className='single-job-side-content'>
          <div className='company-info'>
            <h3>Company Information</h3>
            <h4 className='single-job-company-name'>{singleJob.companyName}</h4>
            <p className='single-job-company-desc'>{singleJob.companyDesc}</p>
            <p>
              Contact Email:
              <span className='single-job-email'>{singleJob.contactEmail}</span>
            </p>
            <p>
              Contact Phone:
              <span className='single-job-phone'>{singleJob.contactPhone}</span>
            </p>
          </div>
          <div className='manage-job'>
            <h3>Manage Job</h3>
            <button
              onClick={() => navigate(`/edit-job/${id}`)}
              className='btn btn-edit'
            >
              Edit Job
            </button>
            <button onClick={deleteJob} className='btn btn-delete'>
              {loading ? 'Deleting...' : 'Delete Job'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleJobPage
