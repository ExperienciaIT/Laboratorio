import { Navigate, Route, Routes } from 'react-router-dom'

import { NavBar } from './routes/components/NavBar'
import { HomeScreen } from './routes/components/HomeScreen'
import { AboutScreen } from './routes/components/AboutScreen'
import { ServiceScreen } from './routes/components/ServiceScreen'

import ClientForm from './routes/components/ClientForm'
import { EmployeeForm } from './routes/components/EmployeeForm/EmployeeForm'

export const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route exact path='/' Component={HomeScreen} />
        <Route path='/about' Component={AboutScreen} />
        <Route path='/services' Component={ServiceScreen} />
        <Route path='/register' Component={ClientForm} />

        <Route path='/admin' Component={EmployeeForm} />

        <Route path='/*' Component={<Navigate to='/' replace />} />
      </Routes>
    </>
  )
}
