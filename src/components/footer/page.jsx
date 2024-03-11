import styles from "./page.module.css";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiLocationPin } from "react-icons/tfi";
import SignUp from "./signup/page";
import { Container, Row, Col } from "react-bootstrap";
import { FiMail, FiPhone } from "react-icons/fi";
import Link from "next/link";
// import { BsTelephone } from "react-icons/bs";
// import { IoMailOutline } from "react-icons/io5";
// import Image from "next/image";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaGoogle,
//   FaInstagram,
//   FaLinkedinIn,
//   FaGithub,
// } from "react-icons/fa";

function Footer() {
  return (
    <>
      <SignUp />
      <div className="container-sm
       my-3">
        <footer
          className="text-center text-lg-start text-black"
          style={{ backgroundColor: "#fff" }}
        >
          <Container className={`pb-0 ${styles.TopCon}`}>
            <Row>
              <Col md={3} lg={3} xl={3} className="mx-auto mt-3">
                <div className={`text-uppercase mb-4 font-weight-bold ${styles.Title}`}>
                  We @ Medilenz
                </div>
                <div className={styles.ComDesc}>
                  Our team is comprised of doctors, each possessing more than a
                  decade of clinical experience in various specialities. Our
                  doctors are from India and abroad.
                </div>
              </Col>

              <hr className="w-100 clearfix d-md-none" />

              <Col md={2} lg={2} xl={2} className="mx-auto mt-3">
                <h6 className={`text-uppercase mb-4 font-weight-bold ${styles.Title}`}>Links</h6>
                <div className={styles.Links}>
                  <Link
                    href="#"
                    className="text-black text-decoration-none fw-400"
                  >
                    Blog
                  </Link>
                </div>
                <div className={styles.Links}>
                  <Link
                    href="#"
                    className="text-black text-decoration-none fw-400"
                  >
                    News&Gallery
                  </Link>
                </div>
                <div className={styles.Links}>
                  <Link
                    href="#"
                    className="text-black text-decoration-none fw-400"
                  >
                    Became Patners
                  </Link>
                </div>
                <div className={styles.Links}>
                  <Link
                    href="#"
                    className="text-black text-decoration-none fw-400"
                  >
                    About Us
                  </Link>
                </div>
              </Col>

              <hr className="w-100 clearfix d-md-none" />

              <Col md={4} lg={4} xl={4} className="mx-auto mt-3">
                <h6 className={`text-uppercase mb-4 font-weight-bold ${styles.Title}`}>
                  Contact
                </h6>
                <div className={styles.Contacts}>
                  <TfiLocationPin
                    style={{ color: "var(--bg)", fontSize: "18px" }}
                  />{" "}
                  <span className="fw-400">
                    5 Harbor Point Drive, #302s Mill Valley, CA 94941
                  </span>
                </div>
                <div className={styles.Contacts}>
                  <FiMail style={{ color: "var(--bg)"}} />{" "}
                  <span className="fw-400">sales@medilenzlit.com</span>
                </div>
                <div className={styles.Contacts}>
                  <FiPhone style={{ color: "var(--bg)"}} />{" "}
                  <span className="fw-400">+1 (215) 219-1388</span>
                </div>
                <div className={styles.Contacts}>
                  <FiPhone style={{ color: "var(--bg)"}} />{" "}
                  <span className="fw-400">+1 (215) 391-1705</span>
                </div>
              </Col>

              <Col md={3} lg={2} xl={3} className="mx-auto mt-3">
                <h6 className={`text-uppercase mb-4 font-weight-bold ${styles.Title}`}>
                  Follow us
                </h6>
                <Link
                  className="btn btn-white btn-floating m-1"
                  // style={{ backgroundColor: "#3b5998" }}
                  href="https://www.facebook.com/MedilenzServices" target="_blank"
                >
                  <FaFacebookF
                    style={{ color: "var(--bg)" }}
                  />
                </Link>
                <Link
                  className={`btn btn-white btn-floating m-1 ${styles.Logo}`}
                  // style={{ backgroundColor: "#55acee" }}
                  href="https://twitter.com/MedilenzS34943" target="_blank"
                >
                  <FaXTwitter
                    style={{ color: "var(--bg)" }}
                  />
                </Link>
                <Link
                  className={`btn btn-white btn-floating m-1 ${styles.Logo}`}
                  // style={{ backgroundColor: "#dd4b39" }}
                  href="https://www.youtube.com/@medilenz5489" target="_blank"
                >
                  <FaYoutube style={{ color: "var(--bg)" }} />
                </Link>
                <Link
                  className={`btn btn-white btn-floating m-1 ${styles.Logo}`}
                  // style={{ backgroundColor: "#ac2bac" }}
                  href="https://www.instagram.com/medilenz_services/" target="_blank"
                >
                  <FaInstagram
                    style={{ color: "var(--bg)" }}
                  />
                </Link>
                <Link
                  className={`btn btn-white btn-floating m-1 ${styles.Logo}`}
                  // style={{ backgroundColor: "#0082ca" }}
                  href="https://www.linkedin.com/company/medilenz-innovations-pvt-ltd/" target="_blank"
                >
                  <FaLinkedinIn
                    style={{ color: "var(--bg)" }}
                  />
                </Link>
                {/* <a
                  className="btn btn-white btn-floating m-1"
                  // style={{ backgroundColor: "#333333" }}
                  href="#!"
                >
                  <FaGithub />
                </a> */}
              </Col>
            </Row>
          </Container>

          <hr className="w-80"/>

          <div
            className="text-center w-100"
            style={{ backgroundColor: "#fff" }}
          >
            <div className={styles.BotmFooter}>
              <div className={styles.EndLine}>© 2024 MEDILENZ. All Rights Reserved.</div>
              <div className={styles.EndLine}>
                Developed by{" "}
                <Link href="https://vraio.in/" target="_blank" style={{ color: "var(--bg" }}>
                  Vraio Software Solutions Pvt Ltd
                </Link>
              </div>
              <div className={styles.EndLine}>Privacy Policy</div>
              <div className={styles.EndLine}>Terms & Conditions</div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
