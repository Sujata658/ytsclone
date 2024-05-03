import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { BrowseMovies } from './pages/BrowseMovies'
import Navbar from './components/Navbar'
import { Footer } from './components/Footer'
import { ViewDetails } from './pages/ViewDetails'

function App() {

  return (
    <>
      <div className='bg-bkgprim text-textprim'>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/browse-movies' element={<BrowseMovies/>} />
        <Route path="/movies/:id" Component={ViewDetails} />
      </Routes>
    <Footer/>
      </div>
    </>
  )
}

export default App
