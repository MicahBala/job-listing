import { Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'

function PageNotFound() {
  return (
    <section className='wrapper'>
      <div className='page-not-found-content'>
        <FaExclamationTriangle className='exclamation' />
        <h1>404 Page Not Found</h1>
        <p>This page does not exist!</p>
        <Link className='go-back' to='/'>
          Go Back
        </Link>
      </div>
    </section>
  )
}

export default PageNotFound
