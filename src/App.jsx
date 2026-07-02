import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Protesis from './pages/Protesis/Protesis'

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/protesis" element={<Protesis />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
