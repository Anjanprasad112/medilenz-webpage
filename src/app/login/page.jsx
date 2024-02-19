import styles from './page.module.css';
const Login = () => {
  return (
    <>
      <div className={styles.Title}>
        <div className={styles.Container}></div>
        Login
      </div>

      <div className={styles.Main}>
        <div className={styles.BG1}></div>
        <div className={styles.BG2}></div>
        <div className={styles.Text}>
          Seamless access to medical records through user-friendly login, ensuring healthcare professionals and patients experience a secure and intuitive platform for information retrieval.
        </div>
        <form className="d-flex flex-column align-items-center">
          <div className="form-group w-50 m-1 mt-3">
            <input type="text" className="form-control" id="usernameOrEmail" placeholder="Username or Email" />
          </div>
          <div className="form-group w-50 m-1">
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <div className="form-check-inline mb-3 m-1">
            <input type="checkbox" className="form-check-input text-center px-2" id="robotCheck" />
            <label className="form-check-label text-center px-2" htmlFor="robotCheck">I'm not a robot</label>
          </div>
          <div className="w-75">
            <p className="text-center">Don't have an account? <a href="/register">Register Now!</a></p>
            <p className="text-center"><a href="/forgot-password">Forgot Password?</a></p>
          </div>
          <button type="submit" className="btn btn-primary w-30 m-2">Sign in</button>
        </form>
      </div>
    </>
  )
}

export default Login;