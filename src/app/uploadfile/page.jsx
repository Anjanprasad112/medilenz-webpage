import { lazy, Suspense } from "react";

const Upload = lazy(() => import("@/components/uploadcomponents/page"))
import styles from './page.module.css'
const Page = () => {
  return (
    <>
      <div className={styles.Title}>
        <div className={styles.Container}></div>
        <div className={styles.Header}>Upload File</div>
      </div>
      <Upload/>
      </>
  )
}

export default Page