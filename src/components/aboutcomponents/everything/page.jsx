import styles from './page.module.css'

const Number = () => {
  return (
    <div className={styles.Container}>

        <div className={styles.Title}>Everything Numbers</div>
        <div className={styles.SubContainer}>
                <div className={styles.Box}>
                    <div className={styles.Number}>800 +</div>
                    <div className={styles.Text}>Settled Cases</div>
                </div>
                <div className={styles.Box}>
                    <div className={styles.Number}>$128M</div>
                    <div className={styles.Text}>Claimed Damages</div>
                </div>
                <div className={styles.Box}>
                    <div className={styles.Number}>12 +</div>
                    <div className={styles.Text}>Law firms</div>
                </div>
                <div className={styles.Box}>
                    <div className={styles.Number}>40 +</div>
                    <div className={styles.Text}>Medical Advisors</div>
                </div>
        </div>
    </div>
  )
}

export default Number