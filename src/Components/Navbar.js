// import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg nav">
    <div className="container-fluid">
      <a className="navbar-brand brand-name" href="#"><span>Travel</span> With Us</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/">Packages</a>
          </li>
        </ul>
        <form className="d-flex search-form" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>        </form>
      </div>
    </div>
  </nav>
  )
}
