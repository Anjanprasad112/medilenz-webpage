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
      <div className="container-xl
       my-3">
        <footer
          className="text-center text-lg-start text-black"
          style={{ backgroundColor: "#fff" }}
        >
          <Container className=" pb-0">
            <Row>
              <Col md={3} lg={3} xl={3} className="mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  We @ Medilenz
                </h6>
                <p className="fw-400">
                  Our team is comprised of doctors, each possessing more than a
                  decade of clinical experience in various specialities. Our
                  doctors are from India and abroad.
                </p>
              </Col>

              <hr className="w-100 clearfix d-md-none" />

              <Col md={2} lg={2} xl={2} className="mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Links</h6>
                <p>
                  <Link
                    href="#"
                    className="text-black text-decoration-none fw-400"
                  >
                    Blog
                  </Link>
                </p>
                <p>
                  <Link
                    href="#"
                    className="text-black text-decoration-none fw-400"
                  >
                    News&Gallery
                  </Link>
                </p>
                <p>
                  <Link
                    href="#"
                    className="text-black text-decoration-none fw-400"
                  >
                    Became Patners
                  </Link>
                </p>
                <p>
                  <Link
                    href="#"
                    className="text-black text-decoration-none fw-400"
                  >
                    About Us
                  </Link>
                </p>
              </Col>

              <hr className="w-100 clearfix d-md-none" />

              <Col md={4} lg={4} xl={4} className="mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contact
                </h6>
                <p>
                  <TfiLocationPin
                    style={{ color: "var(--bg)", fontSize: "18px" }}
                  />{" "}
                  <span className="fw-400">
                    5 Harbor Point Drive, #302s Mill Valley, CA 94941
                  </span>
                </p>
                <p>
                  <FiMail style={{ color: "var(--bg)"}} />{" "}
                  <span className="fw-400">sales@medilenzlit.com</span>
                </p>
                <p>
                  <FiPhone style={{ color: "var(--bg)"}} />{" "}
                  <span className="fw-400">+1 (215) 219-1388</span>
                </p>
                <p>
                  <FiPhone style={{ color: "var(--bg)"}} />{" "}
                  <span className="fw-400">+1 (215) 391-1705</span>
                </p>
              </Col>

              <Col md={3} lg={2} xl={2} className="mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Follow us
                </h6>
                <Link
                  className="btn btn-white btn-floating m-1"
                  // style={{ backgroundColor: "#3b5998" }}
                  href="#!"
                >
                  <FaFacebookF
                    style={{ color: "var(--bg)" }}
                  />
                </Link>
                <Link
                  className="btn btn-white btn-floating m-1"
                  // style={{ backgroundColor: "#55acee" }}
                  href="#!"
                >
                  <FaXTwitter
                    style={{ color: "var(--bg)", }}
                  />
                </Link>
                <Link
                  className="btn btn-white btn-floating m-1"
                  // style={{ backgroundColor: "#dd4b39" }}
                  href="#!"
                >
                  <FaYoutube style={{ color: "var(--bg)" }} />
                </Link>
                <Link
                  className="btn btn-white btn-floating m-1"
                  // style={{ backgroundColor: "#ac2bac" }}
                  href="#!"
                >
                  <FaInstagram
                    style={{ color: "var(--bg)" }}
                  />
                </Link>
                <Link
                  className="btn btn-white btn-floating m-1"
                  // style={{ backgroundColor: "#0082ca" }}
                  href="#"
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

          <hr className="w-80" />

          <div
            className="text-center w-100"
            style={{ backgroundColor: "#fff" }}
          >
            <div className={styles.BotmFooter}>
              <p>© 2024 MEDILENZ. All Rights Reserved.</p>
              <p>
                Developed by{" "}
                <Link href="https://vraio.in/" style={{ color: "var(--bg" }}>
                  Vraio Software Solutions Pvt Ltd
                </Link>
              </p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
