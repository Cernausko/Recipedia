import 'bootstrap/dist/css/bootstrap.min.css';
import '../nav/nav.scss'
import { ReactComponent as Logo } from '../../svg/logo.svg';
import { ReactComponent as Search } from '../../svg/search.svg';
import { ReactComponent as Person } from '../../svg/person.svg';
import { Link } from "react-router-dom";

const Navbar =()=>{
    return(

        <nav className='navbar navbar-expand-lg'>
        <div className='container'>
          <div className='d-flex align-items-center justify-content-start Logo mx-2'>
              <Logo/>
              <a className='navbar-brand' href='/'>Recipedia</a>
          </div>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse justify-content-center' id='navbarNav'>
              <ul className='navbar-nav'>
                  <li className='nav-item'>
				  <Link to="/#" class='nav-link'>Home</Link>
                  </li>
                  <li className='nav-item'>
                      <a className='nav-link' href='#'>Recipe</a>
                  </li>
                  <li className='nav-item'>
                      <a className='nav-link' href='#'>Categories</a>
                  </li>
                  <li className='nav-item'>
                      <a className='nav-link' href='#'>About Us</a>
                  </li>
              </ul>
          </div>
          <div className='d-flex align-items-center justify-content-end UserSearch mx-5'>
              <Search/>
              <Person className='mx-3'/>
          </div>
        </div>
        </nav>
    );

}

export default Navbar