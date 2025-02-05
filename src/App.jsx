import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
      <header>
        <nav>
            <img src="./images/logo.svg" alt="logo" />
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#new">New</a></li>
                <li><a href="#popular">Popular</a></li>
                <li><a href="#trending">Trending</a></li>
                <li><a href="#categories">Categories</a></li>
            </ul>
        </nav>
      </header>
      <main>
        <article>
          <figure>
            <img src="./images/image-web-3-desktop.jpg" alt="web3" />
          </figure>
          <h1>The Bright Future of Web 3.0?</h1>
          <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
          But is it really fulfilling its promise?</p>
          <a>Read more</a>
        </article>
      </main>
      <aside>
        <h2>New</h2>
        <a>Hydrogen VS Electric Cars</a>
        Will hydrogen-fueled cars ever catch up to EVs?
        <a>The Downsides of AI Artistry</a>
        What are the possible adverse effects of on-demand AI image generation?
        <a>Is VC Funding Drying Up?</a>
        Private funding by VC firms is down 50% YOY. We take a look at what that means.
      </aside>
      <section>
        <div className="card">
          <h2>01</h2>
          <h3>Reviving Retro PCs</h3>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
        <div className="card">
          <h2>02</h2>
          <h3>Top 10 Laptops of 2022</h3>
          <p>Our best picks for various needs and budgets.</p>
        </div>
        <div className="card">
          <h2>03</h2>
          <h3>The Growth of Gaming</h3>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </section>
      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </footer>
    </>
  )
}

export default App
