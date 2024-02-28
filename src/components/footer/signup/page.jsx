import styles from './page.module.css'

const SignUp = () => {
  return (
    <div className={styles.Top}>
    <div className={styles.container}>
        <div className={styles.TextContainer}>
            <div className={styles.TextHead}>Join our newsletter</div>
            <div className={styles.TextSubHead}>Enter your email address to receive up-to-date news and other usefull information, delivered right to your inbox</div>
        </div>
        <div className={styles.FormContainer}>
            <form className={styles.Form}>
                <input type="email" name="email" placeholder="Enter your email" className={styles.FormInput} />
                <div  className="btn btn-light text-primary" >Subscribe</div>
            </form>
        </div>
    </div>
 </div>
  )
}

export default SignUp;