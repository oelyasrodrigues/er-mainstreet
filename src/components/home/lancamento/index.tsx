import styles from './styles.module.scss';

export default function Lancamento() {
  return (
    <section className={styles.lancamento + ' flex'}>
      <div className="container">
        <div className={styles.content}>
          <h2 className="title">Nosso último <span className="highlight">lançamento</span></h2>

          <div className={styles.videoContainer}>
            <div className={styles.video}>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/KrLnAuQXDSA" title="Assault &quot;JOIAS NO PULSO&quot; - Borges | Oruam | Chefin | MC Poze do Rodo | Orochi" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
