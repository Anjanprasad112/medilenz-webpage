import { lazy } from 'react';
const Top = lazy(()=>import('./topcomp/page'));
const Form = lazy(()=>import("./formcomp/page"));
import styles from './page.module.css';
const Page = () => {
  return (
    <>
    <div className={styles.BG1}></div>
    <div className={styles.BG2}></div>
    <Top/> 
    <Form/>
    </>
  )
}
export default Page;