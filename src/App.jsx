import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import AllJobsPage from './pages/AllJobsPage'
import PageNotFound from './pages/PageNotFound'
import SingleJobPage from './pages/SingleJobPage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<AllJobsPage />} />
        <Route path='/add-job' element={<AddJobPage />} />
        <Route path='/jobs/:id' element={<SingleJobPage />} />
        <Route path='/edit-job/:id' element={<EditJobPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>,
    ),
  )

  return <RouterProvider router={router} />
}

export default App
