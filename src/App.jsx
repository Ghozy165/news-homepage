import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Aside from './components/Aside'
import OtherPost from './components/OtherPost'

function App() {

  const [navActive, setNavActive] = useState(false)

  const handleNavToggle = () => {
    setNavActive(!navActive)
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <main>
          <article>
            <picture>
              <source media="(min-width: 769px)" srcSet="./images/image-web-3-desktop.jpg" />
              <source media="(max-width: 768px)" srcSet="./images/image-web-3-mobile.jpg" />
              <img src="./images/image-web-3-mobile.jpg" alt="web3" />
            </picture>
            <h1>The Bright Future of Web 3.0?</h1>
            <div className="description">
              <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
              But is it really fulfilling its promise?</p>
              <a href='#'>READ MORE</a>
            </div>
          </article>
        </main>
        <Aside />
      </div>
      <OtherPost />
    </>
  )
}

export default App
