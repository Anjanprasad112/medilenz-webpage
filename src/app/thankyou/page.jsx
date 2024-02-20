// pages/thankYou.js
// import { useNavigation } from 'next/navigation';
// import { useRouter } from 'next/router';
import { redirect } from 'next/navigation'
import styles from './page.module.css';
import Link from 'next/link';

export default function ThankYou() {
    // const navigation = useNuseRouteravigation();


//   setTimeout(() => {
//     redirect('/thankyou');
//   }, 5000);

  return (
    <>
    <div className='text-center'>
      <h1>Thank you for your submission!</h1>
      <p>We will be in touch soon.</p>
    </div>
    <div className='text-center m-3'>

    <Link href="/" className="btn btn-primary mx-auto text-center text-white">Go To Homepage</Link>
    </div>
    </>
  );
}