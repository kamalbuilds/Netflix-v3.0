import Link from 'next/link';
import Footer from '../../components/Footer';
import styles from '../../styles/ninjas.module.css';
const index = () => {
  return (
    <>
        <div className={styles.fra}>
            <div className={styles.inner}>kamal</div>
            <div className={styles.inner}>List3</div>
            <div className={styles.inner}>List2</div>
        </div>
        <Link href="/kamal">kaml</Link>
    </>
  )
}

export default index