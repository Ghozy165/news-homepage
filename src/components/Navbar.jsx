import { useState } from 'react'

export default function Navbar(){

    const [navActive, setNavActive] = useState(false)
    
    const handleNavToggle = () => {
      setNavActive(!navActive)
    }

    return(
        <header>
            <div className="logo">
              <img src="./images/logo.svg" alt="Website Logo - WebBlog" />
            </div>
            <nav className='navbar'>
              <button 
                className='burger-menu' 
                aria-label='Toggle menu' 
                onClick={(e) => {handleNavToggle()}}
              >
                    <div className='burger-icon'>
                      <img src="./images/icon-menu.svg" alt='Open Navigation Menu' />
                    </div>
              </button>
              <div 
                className={`overlay ${navActive ? 'overlay-active' : ''}`} 
                onClick={(e) => {
                    e.stopPropagation();
                    handleNavToggle();
                }}
              >
              </div>
              <div 
                className={`nav-links ${navActive ? 'nav-active' : ''}`}
                aria-hidden={!navActive}
              >
                <button 
                  className='burger-menu' 
                  aria-label='Toggle menu' 
                  onClick={(e) => {handleNavToggle()}}
                >
                    <div className='burger-icon'>
                      <img src="./images/icon-menu-close.svg" alt='Close Navigation Menu' />
                    </div>
                </button>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#new">New</a></li>
                  <li><a href="#popular">Popular</a></li>
                  <li><a href="#trending">Trending</a></li>
                  <li><a href="#categories">Categories</a></li>
                </ul>
              </div>
            </nav>
        </header>
    )
}