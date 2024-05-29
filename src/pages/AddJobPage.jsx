import { useState } from 'react'

function AddJobPage() {
  const [formObject, setFormObject] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormObject((prevFormObject) => ({
      ...prevFormObject,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formObject)
  }

  return (
    <div className='add-job'>
      <div className='add-job-content'>
        <div className='add-job-form'>
          <h2 className='add-job-title'>Add Job</h2>

          <form className='form' onSubmit={handleSubmit}>
            <label htmlFor='job-type'>Job Type</label>
            <select
              id='job-type'
              name='job-type'
              onChange={handleChange}
              value={formObject['job-type'] || ''}
            >
              <option>Select...</option>
              <option value='Full-time'>Full-Time</option>
              <option value='Part-time'>Part-Time</option>
            </select>

            <label htmlFor='job-listing'>Job Listing Name</label>
            <input
              type='text'
              id='job-listing'
              name='job-listing'
              placeholder='e.g Frontend Developper'
              onChange={handleChange}
              value={formObject['job-listing'] || ''}
            />

            <label htmlFor='description'>Description</label>
            <textarea
              id='description'
              name='description'
              rows='5'
              placeholder='Add any job duty, expectations and requirements, e.g. We are looking for a frontend developer with 3 years of experience in React.js'
              onChange={handleChange}
              value={formObject['description'] || ''}
            ></textarea>

            <label htmlFor='salary'>Salary</label>
            <select
              id='salary'
              name='salary'
              onChange={handleChange}
              value={formObject['salary'] || ''}
            >
              <option>Select...</option>
              <option value='under $50K'>Under $50K</option>
              <option value='$50K - $70K'>$50K - $70K</option>
              <option value='$70K - $90K'>$70K - $90K</option>
              <option value='$90K - $110K'>$90K - $110K</option>
              <option value='Above $110K'>Above $110K</option>
            </select>

            <label htmlFor='company-info'>Company Info</label>
            <input
              type='text'
              id='company-info'
              name='company-info'
              placeholder='e.g. Google'
              onChange={handleChange}
              value={formObject['company-info'] || ''}
            />

            <label htmlFor='company-description'>Company Description</label>
            <textarea
              id='company-description'
              name='company-description'
              rows='5'
              placeholder='Add any company info, e.g. Google is an American multinational technology company that specializes in Internet-related services and products'
              onChange={handleChange}
              value={formObject['company-description'] || ''}
            />

            <label htmlFor='email'>Contact Email</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='johndoe@mymail.com'
              onChange={handleChange}
              value={formObject['email'] || ''}
            />

            <label htmlFor='phone'>Contact Phone</label>
            <input
              type='text'
              id='phone'
              name='phone'
              placeholder='Optional phone for applicants'
              onChange={handleChange}
              value={formObject['phone'] || ''}
            />

            <button className='btn btn-add-job'>Add Job</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddJobPage
