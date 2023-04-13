import Card from '../../common/card';
import styles from './styles.module.scss';

export default function Divisoria() {
  return (
    <section className={styles.divisoria}>
        <div className={styles.content}>
          <Card img='/icons/headphone.png' text='Tenha acesso a trechos exclusivos das nossas músicas.'/>
          <Card img='/icons/phone.png' text='Todas as novidades passarão primeiro pela sua mão.'/>
          <Card img='/icons/dolar.png' text='Acesso a vários cupons de descontos para shows diariamente.'/>
        </div>
    </section>
  )
}
