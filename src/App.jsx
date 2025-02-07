import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
// import { Navbar } from './components/Navbar'

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
        <aside>
          <h2>New</h2>
          <div className="card-aside">
            <a href='#'>Hydrogen VS Electric Cars</a>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <hr />
          <div className="card-aside">
            <a href='#'>The Downsides of AI Artistry</a>
            <p>What are the possible adverse effects of on-demand AI image generation?</p>
          </div>
          <hr />
          <div className="card-aside">
            <a href='#'>Is VC Funding Drying Up?</a>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </div>
        </aside>
      </div>
      <section className='other-post' id='other-post'>
        <div className="card-other-post">
          <div className="image">
            <img src='./images/image-retro-pcs.jpg' />
          </div>
          <div className="info-other-post">
            <h3>01</h3>
            <a href='#'>Reviving Retro PCs</a>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className="card-other-post">
          <div className="image">
            <img src='./images/image-top-laptops.jpg' />
          </div>
          <div className="info-other-post">
            <h3>02</h3>
            <a href='#'>Top 10 Laptops of 2022</a>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className="card-other-post">
          <div className="image">
            <img src='./images/image-gaming-growth.jpg' />
          </div>
          <div className="info-other-post">
            <h3>03</h3>
            <a href='#'>The Growth of Gaming</a>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
