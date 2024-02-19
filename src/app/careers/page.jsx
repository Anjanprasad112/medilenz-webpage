import { lazy } from "react";
const Top = lazy(()=>import("@/components/careercomponents/Topcomp/page"));
const Mid = lazy(()=>import("@/components/careercomponents/Midcomp/page"));
import styles from "./page.module.css";
import Current from "@/components/careercomponents/Openings/page";

const Carrer = () => {
  return (
    <>
      <div className={styles.Title}>
        <div className={styles.Container}></div>
        <div className={styles.Head}>Careers</div>
        <p className={styles.Para}>Work with Medilenz and RECHARGE YOUR CAREER</p>
      </div>
      <Top/>
      <Mid/>
      <Current/>
    </>
  );
};

export default Carrer;
