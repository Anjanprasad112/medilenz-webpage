import Core from "@/components/aboutcomponents/corecomp/page";
import styles from './page.module.css';
import Top from "@/components/aboutcomponents/topcomp/page";


const About = () => {
  return (
    <>
    <div className={styles.Title}>
      <div className={styles.Container}></div>
      About Us
    </div>
    <Top/>
    <Core/>
    </>
  )
}

export default About;