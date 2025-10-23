import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AutoLuxWebsite from '../home/AutoLuxWebsite'
import { NotFound } from '../components/NotFound'
import { Location } from '../components/Location'
import { Header } from '../components/Header'
import { data } from '../data/AppData'

function AppRoutes() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<AutoLuxWebsite/>}/>
            <Route element={<Header brand={data.brand}/>}>
              <Route path='/contact' element={<Location/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
