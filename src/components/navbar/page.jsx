import styles from './page.module.css'
import { CiSearch } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";
import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
  <div className="container-fluid">
  <Link className={`navbar-brand ${styles.LogoContainer}`} href="#">
      <Image src="/logo.jpg" alt="Logo" width={40} height={40} className="mx-1"/>
      <span className={styles.Logo}>MEDILENZ</span>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active ${styles.customtext}`} aria-current="page" href="#">HOME</Link>
        </li>
       
        <li className="nav-item dropdown">
          <Link className={`nav-link dropdown-toggle ${styles.customtext}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ABOUT
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#">Action</Link></li>
            <li><Link className="dropdown-item" href="#">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" href="#">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className={`nav-link dropdown-toggle ${styles.customtext}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PARTNERS
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#">Action</Link></li>
            <li><Link className="dropdown-item" href="#">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" href="#">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${styles.customtext}`} href="#">SERVICES</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${styles.customtext}`} href="#">UPLOAD FILE</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className={`nav-link dropdown-toggle ${styles.customtext}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          CAREERS
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#">Action</Link></li>
            <li><Link className="dropdown-item" href="#">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" href="#">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${styles.customtext}`} href="#">CONTACT</Link>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className={`form-control me-2 ${styles.customfontsize}`} type="search" placeholder="Search here..." aria-label="Search"/>
        {/* <button className={`btn ${styles.Button}`} type="submit">Search</button> */}
        <div className={styles.SearchBox}>
          <CiSearch className={styles.SearchIcon}/>
        </div>
      </form>
      <div className={styles.Admin}>
        <LuUser2 className={styles.AdminLogo}/>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar