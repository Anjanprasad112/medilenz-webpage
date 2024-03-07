import { lazy } from 'react';
const Top = lazy(()=>import('./topcomp/page'));
const MyForm = lazy(()=>import("./formcomp/page"));
import styles from './page.module.css';
const Page = () => {
  return (
    <div  className={ styles.Container}>
    <div className={styles.BG1}></div>
    {/* <div className={styles.BG2}></div> */}
    <Top/> 
    <MyForm/>
    </div>
  )
}
export default Page;