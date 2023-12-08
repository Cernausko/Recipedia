import 'bootstrap/dist/css/bootstrap.min.css';
import '../nav/nav.scss'
import { ReactComponent as Logo } from '../../svg/logo.svg';
import { ReactComponent as Search } from '../../svg/search.svg';
import { ReactComponent as Person } from '../../svg/person.svg';

const Navbar =()=>{
    return(

        <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <div class="d-flex align-items-center justify-content-start Logo mx-2">
              <Logo/>
              <a class="navbar-brand" href="#">Recipedia</a>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul class="navbar-nav">
                  <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Recipe</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Community</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">About Us</a>
                  </li>
              </ul>
          </div>
          <div class="d-flex align-items-center justify-content-end UserSearch mx-5">
              <Search/>
              <Person class="mx-3"/>
          </div>
        </div>
        </nav>
    );

}

export default Navbar