import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { PortfolioPage } from './pages/PortfolioPage'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="bg-gradient-to-r from-purple-400 to-pink-200" 
    style={{
      height: "100%"
    }}>
      
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path='/about' exact component={AboutPage}></Route>
          <Route path='/portfolio' exact component={PortfolioPage}></Route>
          <Route path='/contact' exact component={ContactPage}></Route>
          <Route path='/' exact component={HomePage}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
