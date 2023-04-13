import styles from './styles.module.scss';

export default function Barra() {
  const handlebtn = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })

    
  }


  return (
    <section className={styles.barra + " flex"}>
      <div className="container">
        <div className={styles.content}>
          <h2 className='title'>Se <span className="gray">você</span> é fã do trap br <br /><span className='noBreakB'>Você não pode </span> <br /> PERDER ESSA <span className="gray">OPORTUNIDADE!</span></h2>

          <button className={styles.btn} onClick={handlebtn}>SIM, QUERO APROVEITAR</button>
        </div>
      </div>
    </section>
  )
}
