import React, { useState }from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button,setButton]= useState (true);

  const handleClick =  () => setClick (!click);
  const closeMobileMenu = () => setClick (false);

  const showButton = () => {
    if(window.innerwidth <= 960) {
        setButton(false)
    }else{
        setButton(true)
    }
  };

  window.addEventListener('resize', showButton)
  return (
    <>
    <nav className="navbar">
        <div className= "navbar-container">
        <Link to ="/" className="navbar-logo">
            ROOTED <i className="fa-brands fa-pagelines"></i>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
          <ul className = {click ?'nav-menu active': 'nav-menu' }>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                    About
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                    Services
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Media
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/book-now' className='nav-links-mobile' onClick={closeMobileMenu}>
                    Book Now
                </Link>
            </li>
          </ul>
          {button && <Button buttonStlye= 'btn--outline'> BOOK NOW</Button>}
        </div>
        </div>
    </nav>  

    </>
  )
}

export default Navbar
