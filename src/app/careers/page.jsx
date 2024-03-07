import { lazy } from "react";
const Top = lazy(()=>import("@/components/careercomponents/Topcomp/page"));
const Mid = lazy(()=>import("@/components/careercomponents/Midcomp/page"));
import styles from "./page.module.css";
import Current from "@/components/careercomponents/Openings/page";
import Form from "@/components/careercomponents/Formcomp/page";

const Carrer = () => {
  return (
    <>
    <div className={styles.Title}>
    <div className={styles.Container}></div>
    <div className={styles.Head}>Careers</div>
    <div className={styles.Para}>Work with Medilenz and RECHARGE YOUR CAREER</div>
  </div>
      <Top/>
      <Mid/>
      <Current/>
      <Form/>
    </>
  );
};

export default Carrer;
