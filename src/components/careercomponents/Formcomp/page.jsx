import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = () => {
  return (
    
    <div className={styles.Container}>
        <div className={styles.Main}></div>
        <div className={styles.BG}></div>
        <div className={styles.Header}>Apply Now</div>
        <form>
            <div className="row m-2">
                <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="First Name" style={{backgroundColor: "white"}} />
                </div>
                <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Last Name" style={{backgroundColor: "white"}} />
                </div>
            </div>
            <div className="row m-2">
                <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Phone Number" style={{backgroundColor: "white"}} />
                </div>
                <div className="col-md-6">
                    <input type="email" className="form-control" placeholder="Email ID" style={{backgroundColor: "white"}} />
                </div>
            </div>
            <div className="row m-2">
                <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Qualification" style={{backgroundColor: "white"}} />
                </div>
                <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Position Applying" style={{backgroundColor: "white"}} />
                </div>
            </div>
            <div className="row m-2">
                <div className="col-md-12">
                    <input type='file' className="form-control" placeholder="Upload Your Resume (PDF or Word)" style={{backgroundColor: "white"}}/>
                </div>
            </div>
            <div className="row m-2">
                <div className="col-md-12">
                    <textarea className="form-control" placeholder="Write a message ?" style={{backgroundColor: "white"}}></textarea>
                </div>
            </div>
            <div className="row text-center m-2">
                <div className="col-md-12">
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Form;
