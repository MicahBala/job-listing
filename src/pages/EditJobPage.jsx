import { useForm } from 'react-hook-form'
import ErrorText from '../components/ErrorText'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'

function EditJobPage() {
  const [loading, setLoading] = useState(true)
  const [singleJob, setSingleJob] = useState(null)

  const { id } = useParams()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm()

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const result = await fetch(
          `https://job-listing-backend-m4yh.onrender.com/jobs/${id}`,
        )
        const res = await result.json()
        const { data } = res
        setLoading(false)
        reset((formData) => ({
          ...formData,
          ...data,
        }))
      } catch (error) {
        console.log('Error fetching data', error)
      } finally {
        setLoading(false)
      }
    }

    fetchSingleJob()
  }, [id, reset])

  const navigate = useNavigate()

  const submitForm = async (data) => {
    try {
      // Submit form logic here
      const result = await fetch(
        `https://job-listing-backend-m4yh.onrender.com/jobs/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      )

      if (!result.ok) {
        throw new Error('Something went wrong. Please try again later.')
      }

      toast.success('Job edited successfully')

      return navigate('/jobs')
    } catch (error) {
      console.log('Error submitting form', error)
    }
  }

  return loading ? (
    <Spinner />
  ) : (
    <div className='add-job'>
      <div className='add-job-content'>
        <div className='add-job-form'>
          <h2 className='add-job-title'>Edit Job</h2>

          <form
            className='form'
            onSubmit={handleSubmit((data) => submitForm(data))}
          >
            <label htmlFor='jobType'>Job Type</label>
            <select
              id='jobType'
              name='jobType'
              {...register('jobType', { required: 'Job Type is required' })}
            >
              <option></option>
              <option value='Full-time'>Full-Time</option>
              <option value='Part-time'>Part-Time</option>
            </select>
            {errors.jobType && <ErrorText text={errors.jobType.message} />}

            <label htmlFor='title'>Job Listing Name</label>
            <input
              type='text'
              id='title'
              name='title'
              {...register('title', {
                required: 'Job title is required',
              })}
              placeholder='e.g Frontend Developper'
            />
            {errors.title && <ErrorText text={errors.title.message} />}

            <label htmlFor='description'>Description</label>
            <textarea
              id='description'
              name='description'
              {...register('description', { required: true })}
              rows='5'
              placeholder='Add any job duty, expectations and requirements, e.g. We are looking for a frontend developer with 3 years of experience in React.js'
            ></textarea>
            {errors.description && <ErrorText text='description is required' />}

            <label htmlFor='salaryRange'>Salary</label>
            <select
              id='salaryRange'
              name='salaryRange'
              {...register('salaryRange', { required: true })}
            >
              <option>{}</option>
              <option value='under $50K'>Under $50K</option>
              <option value='$50K - $70K'>$50K - $70K</option>
              <option value='$70K - $90K'>$70K - $90K</option>
              <option value='$90K - $110K'>$90K - $110K</option>
              <option value='Above $110K'>Above $110K</option>
            </select>
            {errors.salaryRange && <ErrorText text='Salary is required' />}

            <label htmlFor='companyName'>Company Info</label>
            <input
              type='text'
              id='companyName'
              name='companyName'
              {...register('companyName', { required: true })}
              placeholder='e.g. Google'
            />
            {errors.companyName && (
              <ErrorText text='Company Info is required' />
            )}

            <label htmlFor='companyDesc'>Company Description</label>
            <textarea
              id='companyDesc'
              name='companyDesc'
              {...register('companyDesc', { required: true })}
              rows='5'
              placeholder='Add any company info, e.g. Google is an American multinational technology company that specializes in Internet-related services and products'
            />
            {errors.companyDesc && (
              <ErrorText text='Company description is required' />
            )}

            <label htmlFor='location'>Location</label>
            <input
              type='text'
              id='location'
              name='location'
              {...register('location', { required: true })}
              placeholder='e.g. Lagos, Nigeria'
            />
            {errors.location && <ErrorText text='Location is required' />}

            <label htmlFor='contactEmail'>Contact Email</label>
            <input
              type='email'
              id='contactEmail'
              name='contactEmail'
              {...register('contactEmail', {
                required: 'Email is required',
                validate: (value) => {
                  return value.includes('@') || 'Email must include @'
                },
              })}
              placeholder='johndoe@mymail.com'
            />
            {errors.contactEmail && (
              <ErrorText text={errors.contactEmail.message} />
            )}

            <label htmlFor='contactPhone'>Contact Phone</label>
            <input
              type='text'
              id='contactPhone'
              name='contactPhone'
              {...register('contactPhone')}
              placeholder='Optional contact phone'
            />

            <button disabled={isSubmitting} className='btn btn-add-job'>
              {isSubmitting ? 'Submitting...' : 'Update Job'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditJobPage
