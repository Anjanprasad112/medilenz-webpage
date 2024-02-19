import {lazy, Suspense} from 'react';
const Media = lazy(()=>import('@/components/contactcomponents/media/page'))
import styles from './page.module.css';
const Form = lazy(()=>import('@/components/contactcomponents/form/page'));
const ContactUs = () => {
  return (
    <>
    <div className={styles.Title}>
        <div className={styles.Container}></div>
        Contact Us
      </div>
      <Media/>
      <Form/>
      </>
  )
}

export default ContactUs