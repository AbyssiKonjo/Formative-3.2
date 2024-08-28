import './app.scss'
import { HashRouter } from 'react-router-dom'
import Links from './routes/Links'
// NAV COMPONENTS
import Header from './components/nav/header/Header'
import Footer from './components/nav/footer/Footer'


const App = () => {

  return (
    <HashRouter>
      <Header/>
      <Links/>
      <Footer/>
    </HashRouter>
  )
}

export default App
