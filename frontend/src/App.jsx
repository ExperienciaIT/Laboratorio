import { Navigate, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Header } from './routes/components/Header'
import { HomeScreen } from './routes/components/HomeScreen'
import { AboutScreen } from './routes/components/AboutScreen'
import { ServiceScreen } from './routes/components/ServiceScreen'

export const App = () => {
  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/about" element={<AboutScreen />}></Route>
        <Route path="/services" element={<ServiceScreen />}></Route>
        <Route path='/*' element={<Navigate to="/" replace={true} />}></Route>
      </Routes>
    </>
  )
}

