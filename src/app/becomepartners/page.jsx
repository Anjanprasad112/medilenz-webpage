import { lazy, Suspense } from "react";
import styles from "./page.module.css";
const BecomePartners = lazy(() =>
  import("@/components/partnerscomp/becomepartners/page")
);
const Force = lazy(() => import("@/components/partnerscomp/form/page"));
const page = () => {
  return (
    <>
      <div className={styles.Title}>
        <div className={styles.Container}></div>
        <div className={styles.Head}>Become Partners</div>
        <div className={styles.Para}>Preferential Partnership Models</div>
      </div>
      <BecomePartners />
      <Force />
    </>
  );
};

export default page;
