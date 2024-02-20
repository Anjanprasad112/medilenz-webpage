import { lazy } from "react";
import styles from './page.module.css'
const News = lazy(()=>import("@/components/newsgallerycomponents/news/page"));

const Page = () => {
  return (
    <>
    <div className={styles.Title}>
    <div className={styles.Container}></div>
    News & Gallery
  </div>
  <News/>
    </>
  )
}

export default Page