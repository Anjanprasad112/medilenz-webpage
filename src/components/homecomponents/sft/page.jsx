import styles from './page.module.css';
import Image from 'next/image';

const SecureFile = () => {
  return (
    <div className={`${styles.Container} container-fluid`}>
        <div className={`row align-items-center justify-content-center`}>
            <div className={`col-md-6 ${styles.ImageContainer}`}>
                <Image src="/FTP.jpg" alt="ftp" width={400} height={400}/>
            </div>
            <div className={`col-md-6 ${styles.TextContainer}`}>
                <h2>Secure File Transfer</h2>
                <p>
                    Once successfully submitting the form, you will be taken to our upload page, where you can attach your PDF documents and upload them to us and we can begin the process.
                </p>
                <button className="btn btn-primary">Upload your file</button>
            </div>
        </div>
    </div>
  )
}

export default SecureFile
