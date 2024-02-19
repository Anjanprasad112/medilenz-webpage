import {lazy, Suspense} from 'react';
import styles from './page.module.css';
const BecomePartners = lazy(() => import("@/components/partnerscomp/becomepartners/page"));
const Force = lazy(() => import("@/components/partnerscomp/form/page"));
const page = () => {
  return (
    <>
    <div className={styles.Title}>
        <div className={styles.Container}></div>
        <div className={styles.Head}>Become Partners</div>
        <p className={styles.Para}>Preferential Partnership Models</p>
      </div>
      <BecomePartners/>
      <Force/>
    </>
  )
}

export default page;