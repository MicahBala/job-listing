import { useForm } from 'react-hook-form'
import ErrorText from '../components/ErrorText'

function AddJobPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const submitForm = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
  }

  return (
    <div className='add-job'>
      <div className='add-job-content'>
        <div className='add-job-form'>
          <h2 className='add-job-title'>Add Job</h2>

          <form
            className='form'
            onSubmit={handleSubmit((data) => submitForm(data))}
          >
            <label htmlFor='job-type'>Job Type</label>
            <select
              id='job-type'
              name='job-type'
              {...register('job-type', { required: 'Job Type is required' })}
            >
              <option></option>
              <option value='Full-time'>Full-Time</option>
              <option value='Part-time'>Part-Time</option>
            </select>
            {errors['job-type'] && (
              <ErrorText text={errors['job-type'].message} />
            )}

            <label htmlFor='job-listing'>Job Listing Name</label>
            <input
              type='text'
              id='job-listing'
              name='job-listing'
              {...register('job-listing', {
                required: 'Job Listing is required',
              })}
              placeholder='e.g Frontend Developper'
            />
            {errors['job-listing'] && (
              <ErrorText text={errors['job-listing'].message} />
            )}

            <label htmlFor='description'>Description</label>
            <textarea
              id='description'
              name='description'
              {...register('description', { required: true })}
              rows='5'
              placeholder='Add any job duty, expectations and requirements, e.g. We are looking for a frontend developer with 3 years of experience in React.js'
            ></textarea>
            {errors.description && <ErrorText text='description is required' />}

            <label htmlFor='salary'>Salary</label>
            <select
              id='salary'
              name='salary'
              {...register('salary', { required: true })}
            >
              <option></option>
              <option value='under $50K'>Under $50K</option>
              <option value='$50K - $70K'>$50K - $70K</option>
              <option value='$70K - $90K'>$70K - $90K</option>
              <option value='$90K - $110K'>$90K - $110K</option>
              <option value='Above $110K'>Above $110K</option>
            </select>
            {errors.salary && <ErrorText text='Salary is required' />}

            <label htmlFor='company-info'>Company Info</label>
            <input
              type='text'
              id='company-info'
              name='company-info'
              {...register('company-info', { required: true })}
              placeholder='e.g. Google'
            />
            {errors['company-info'] && (
              <ErrorText text='Company Info is required' />
            )}

            <label htmlFor='company-description'>Company Description</label>
            <textarea
              id='company-description'
              name='company-description'
              {...register('company-description', { required: true })}
              rows='5'
              placeholder='Add any company info, e.g. Google is an American multinational technology company that specializes in Internet-related services and products'
            />
            {errors['company-description'] && (
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

            <label htmlFor='email'>Contact Email</label>
            <input
              type='email'
              id='email'
              name='email'
              {...register('email', {
                required: 'Email is required',
                validate: (value) => {
                  return value.includes('@') || 'Email must include @'
                },
              })}
              placeholder='johndoe@mymail.com'
            />
            {errors.email && <ErrorText text={errors.email.message} />}

            <label htmlFor='phone'>Contact Phone</label>
            <input
              type='text'
              id='phone'
              name='phone'
              {...register('phone')}
              placeholder='Optional contact phone'
            />

            <button disabled={isSubmitting} className='btn btn-add-job'>
              {isSubmitting ? 'Submitting...' : 'Add Job'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddJobPage
