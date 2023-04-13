import styles from "./styles.module.scss";

export default function Hero() {

  return (
    <section className={styles.hero + " flex"}>
      <div className="container">
        <div className={styles.content}>
          <img src="/logo.png" alt="logo mainstreet" className={styles.logo} />
          <h1 className="title">
            <span className="highlight">Receba todas</span> as novidades da{" "}
            <span className="highlight">Mainstreet</span> na palma da <span className="noBreak">sua mão!!</span>
          </h1>
          <p>
            Agora você pode ficar por dentro de tudo que acontece na Mainstreet
            direto no seu celular de forma <span className="noBreak">100% gratuita.</span>
          </p>
          <div className={styles.input}>
            <img src="/icons/email.png" alt="mail" />
            <input type='email' name="emaill" id="email" placeholder="Digite seu melhor email"/>
          </div>
          <button className={styles.btn}>QUERO APROVEITAR AS NOVIDADES</button>
        </div>
      </div>
    </section>
  );
}
