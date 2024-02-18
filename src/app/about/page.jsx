import { lazy, Suspense } from "react";
const Core = lazy(() => import("@/components/aboutcomponents/corecomp/page"));
import styles from "./page.module.css";
const Top = lazy(() => import("@/components/aboutcomponents/topcomp/page"));
const Comp = lazy(() => import("@/components/aboutcomponents/compilancecomp/page"));
const Leader = lazy(() => import("@/components/aboutcomponents/leaderteam/page"));
const Expert = lazy(() => import("@/components/aboutcomponents/expertteam/page"));
const Number = lazy(() => import("@/components/aboutcomponents/everything/page"))
const About = () => {
  return (
    <>
      <div className={styles.Title}>
        <div className={styles.Container}></div>
        About Us
      </div>
      <Top />
      <Core />
      <Comp/>
      <Leader/>
      <Expert/>
      <Number/>
    </>
  );
};

export default About;
