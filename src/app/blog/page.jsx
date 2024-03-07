import {lazy} from 'react';
import styles from './page.module.css';
const BlogPage = lazy(()=>import('@/components/blogcomponents/blogs/page'))

const Page = () => {
  return (
    <>
        <div className={styles.Title}>
    <div className={styles.Container}></div>
    <div className={styles.Head}>Blogs</div>
    <div className={styles.Para}>Our expert team committed to helping all with hope</div>
  </div>
      <BlogPage/>
    </>
  )
}

export default Page