import styles from './styles.module.scss'

interface Props{
  img:string
  text:string
}

export default function Card(props:Props) {
  return (
    <div className={styles.card}>
      <img src={props.img} alt="Card image" />
      <p>{props.text}</p>
    </div>
  )
}
