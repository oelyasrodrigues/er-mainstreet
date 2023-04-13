import styles from './styles.module.scss';

export default function Footer() {
  return (
    <section className={styles.footer + ' flex'}>
      <div className="container">
        <div className={styles.content}>
          <h3>Desenvolvido por <a href="https://www.instagram.com/dsgn.elyas/" target={"_blank"} >Elyas Rodrigues</a></h3>
          <p>&copy; 2023</p>
        </div>
      </div>
    </section>
  )
}
