import styles from './page.module.css';

const Mid = () => {
  return (
    <div className={styles.Container}>
        <div className={styles.BG1}></div>
        <div className={styles.BG2}></div>
        <div className={styles.SubContainer}>
        <div className={styles.Text}>We are on a mission to provide the best service to our customers.
Join us in making our services simple and modern. We are hiring for the following domains.</div>
<div className={styles.Box}>
  <div className={styles.BoxText}>E-Indexing</div>
  <div className={styles.BoxText}>Medical Record Review</div>
  <div className={styles.BoxText}>Mass Tort Case Evaluation</div>
  <div className={styles.BoxText}>E-Chart</div>
  <div className={styles.BoxText}>Plaintiff Fact Sheets</div>
</div>
</div>
    </div>
  )
}

export default Mid