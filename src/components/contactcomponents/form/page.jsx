import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = () => {
  return (
    
    <div className={styles.Container}>
        <div className={styles.Main}></div>
        <div className={styles.BG}></div>
        <div className={styles.Header}>Leave a message</div>
        <form>
            <div className="row m-2">
                <div className="col-md-6">
                    <input type="text" className="form-control form-control-lg" placeholder="First Name" style={{backgroundColor: "white"}} />
                </div>
                <div className="col-md-6">
                    <input type="text" className="form-control form-control-lg" placeholder="Last Name" style={{backgroundColor: "white"}} />
                </div>
            </div>
            <div className="row m-2">
                <div className="col-md-6">
                    <input type="text" className="form-control form-control-lg" placeholder="Phone Number" style={{backgroundColor: "white"}} />
                </div>
                <div className="col-md-6">
                    <input type="email" className="form-control form-control-lg" placeholder="Email ID" style={{backgroundColor: "white"}} />
                </div>
            </div>
            <div className="row m-2">
                <div className="col-md-12">
                    <textarea className="form-control form-control-lg" placeholder="Are you interested in ?" style={{backgroundColor: "white"}}></textarea>
                </div>
            </div>
            <div className="row text-center m-2">
                <div className="col-md-12">
                    <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Form;
