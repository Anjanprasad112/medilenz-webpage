import { lazy, Suspense } from "react";
const Core = lazy(() => import("@/components/aboutcomponents/corecomp/page"));
import styles from "./page.module.css";
const Top = lazy(() => import("@/components/aboutcomponents/topcomp/page"));

const About = () => {
  return (
    <>
      <div className={styles.Title}>
        <div className={styles.Container}></div>
        About Us
      </div>
      <Top />
      <Core />
    </>
  );
};

export default About;
