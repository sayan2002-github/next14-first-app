import Links from "./links/Links";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary ${styles.navProperty}`} data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className='collapse navbar-collapse' id="navbarNavDropdown">
          <Links/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
