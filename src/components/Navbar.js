import React, {useState} from 'react'

import { Link } from 'gatsby'
import { FiAlignJustify } from 'react-icons/fi'
import logo from '../assets/images/logo.svg'

const Navbar = () => {
  const [showToggle, setShowToggle] = useState(false);
  return (
    <nav className='navbar'>
        <div className='nav-centre'>
            <div className='nav-header'>
                <Link to='/'>
                    <img src={logo} alt='simply recipes'/>
                </Link>
                <button className='nav-btn' onClick={() => setShowToggle(!showToggle)}>
                <FiAlignJustify />
                </button>
            </div>
            <div className={showToggle ? 'nav-links show-links' : 'nav-links'}>
              <Link to='/' className='nav-link' activeClassName='active-link'  onClick={() => setShowToggle(false)}>Home</Link>
              <Link to='/recipe' className='nav-link' activeClassName='active-link' onClick={() => setShowToggle(false)}>Recipes</Link>
              <Link to='/tags' className='nav-link' activeClassName='active-link' onClick={() => setShowToggle(false)}>Tags</Link>
              <Link to='/about' className='nav-link' activeClassName='active-link' onClick={() => setShowToggle(false)}>About</Link>
              <div className='nav-link contact-link'>
                <Link to='/contact' className='btn' onClick={() => setShowToggle(false)}>Contact Us</Link>
              </div>
            </div>
        </div>
    </nav>
    //   <nav>
    //   <FiAlignJustify/>
    //     <ul>
    //         <li>
    //             <Link to='/'>Home</Link>
    //         </li>
    //         <li>
    //             <Link to='/about'>About</Link>
    //         </li>
    //         <li>
    //             <Link to='/contact'>Contact</Link>
    //         </li>
    //         <li>
    //             <Link to='/recipe'>Recipe</Link>
    //         </li>
    //         <li>
    //             <Link to='/tags'>Tags</Link>
    //         </li>
    //     </ul>
    //   </nav>
  )
}

export default Navbar
