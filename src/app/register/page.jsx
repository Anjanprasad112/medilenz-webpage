import styles from './page.module.css';

const Register =  () =>{
  return (
    <>
    <div className={styles.Title}>
      <div className={styles.Container}>
      </div>
      Register
    </div>
    <div className={styles.Main}>
        <div className={styles.BG1}></div>
        <div className={styles.BG2}></div>
        <div className={styles.Text}>
          Streamlined registration processes pave the way for convenient access to medical records accounts, prioritizing user privacy and fostering a user-friendly environment in healthcare data management.
        </div>
        <form className="d-flex flex-column align-items-center">
          <div className={`form-row w-75 m-1 ${styles.Box} `}>
            <div className="form-group col-20 m-1">
              <input type="text" className="form-control" id="customername" placeholder="Law Firm/Customer Name" />
            </div>
            <div className="form-group col-20 m-1">
              <input type="text" className="form-control" id="contactPerson" placeholder="Contact Person" />
            </div>
          </div>
          <div className={`form-row w-75 m-1 ${styles.Box}`}>
            <div className="form-group col-20 m-1">
              <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
            <div className="form-group col-20 m-1">
              <input type="tel" className="form-control" id="phone" placeholder="Phone" />
            </div>
          </div>
          <div className={`form-row w-75 m-1 ${styles.Box}`}>
            <div className="form-group col-20 m-1">
              <input type="password" className="form-control" id="password" placeholder="Password" />
            </div>
            <div className="form-group col-20 m-1">
              <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" />
            </div>
          </div>
          <div className="form-check-inline w-100 m-1 d-flex justify-content-center align-items-center">
            <input type="checkbox" className="form-check-input px-1" id="robotCheck" defaultChecked  />
            <label className="form-check-label px-1 text-sm-center" htmlFor="robotCheck">Receive up-to-date news & other information, delivered right to your inbox.</label>
          </div>
          <div className="w-75">
            <p className="text-center">Already have an account ? <a href="/login" className="text-primary">Sign In Now!</a></p>
          </div>
          <button type="submit" className="btn btn-primary w-30 m-2">Register</button>
        </form>
      </div>
    </>
  )
}

export default Register;