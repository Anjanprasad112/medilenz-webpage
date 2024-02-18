import { lazy, Suspense } from "react";
const SliderComp = lazy(() => import("@/components/partnerscomp/carousel/page"));
import styles from "./page.module.css";
const Partenrs = lazy(()=>import("@/components/partnerscomp/becomepartner/page"));

const page = () => {
  return (
    <>
     <div className={styles.Title}>
        <div className={styles.Container}></div>
        Partners
      </div>
      <SliderComp/>
      <Partenrs/>
      </>
  )
}

export default page