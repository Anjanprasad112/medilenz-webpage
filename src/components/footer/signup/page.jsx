import styles from './page.module.css'

const SignUp = () => {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.TextContainer}>
            <p className={styles.TextHead}>Join our newsletter</p>
            <p className={styles.TextSubHead}>Enter your email address to receive up-to-date news and other usefull information,delivered right to your inbox</p>
        </div>
        <div className={styles.FormContainer}>
            <form className={styles.Form}>
                <input type="email" name="email" placeholder="Enter your email" className={styles.FormInput} />
                <div  className="btn btn-light text-primary mt-1 text-medium" >Subscribe</div>
            </form>
        </div>
    </div>
 </>
  )
}

export default SignUp;