import styles from "./page.module.css";
import { CiSearch } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg sticky-top bg-white  ${styles.Contain}`}>
      {/* <div className={styles.NavTop}> */}
      <div className={styles.TopCon}>
        <Link className={` ${styles.LogoContainer} `} href="/">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={45}
            height={45}
            className="mx-1"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${styles.customtext}`}
                aria-current="page"
                href="/"
              >
                HOME
              </Link>
            </li>

            <li className="nav-item ">
              <Link
                className={`nav-link  ${styles.customtext}`}
                href="/about"
                aria-current="page"
              >
                ABOUT
              </Link>
              {/* <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="/about">
                    About Us
                  </Link>
                </li>
              </ul> */}
            </li>
            <li className={`nav-item dropdown ${styles.Drop}`}>
              <Link
                className={`nav-link ${styles.customtextdrop}`}
                href="/partners"
                aria-current="page"
              >
                PARTNERS
              </Link>
              <Link
                className={` dropdown-toggle ${styles.customtextdrop}`}
                href="/partners"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                
              </Link>
              <ul className="dropdown-menu">
      
                <li>
                  <Link className="dropdown-item" href="/becomepartners">
                    Become Partners
                  </Link>
                </li>

              </ul>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${styles.customtext}`}
                href="/services"
              >
                SERVICES
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${styles.customtext}`}
                href="/uploadfile"
              >
                UPLOADFILE
              </Link>
            </li>
            <li className={`nav-item dropdown ${styles.Drop}`}>
              <Link
                className={`nav-link ${styles.customtextdrop}`}
                href="/careers"
                aria-current="page"
              >
                CAREERS
              </Link>
              <Link
                className={` dropdown-toggle ${styles.customtextdrop}`}
                href="/careers"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
    
              </Link>
              <ul className="dropdown-menu">

                <li>
                  <Link className="dropdown-item" href="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider " />
                </li>
                <li>
                  <Link className="dropdown-item" href="newsgallery">
                    News & Gallery
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${styles.customtext}`}
                href="contactus"
              >
                CONTACT
              </Link>
            </li>
          </ul>
          <div className={styles.InputBox}>
            <input type="text" placeholder="Search here" className={styles.Input} />
            <CiSearch className={styles.SearchIcon} />
          </div>

          <div className={styles.Admin}>
            <LuUser2 className={styles.AdminLogo} />
          </div>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;