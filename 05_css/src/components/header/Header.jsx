import styles from './Header.module.css'


const Header = () => {
  return (
    <div className={styles.header}>
        <h3 id={styles.head}>karthik</h3>
        <button className={styles.btn}>login</button>
    </div>
  )
}

export default Header
