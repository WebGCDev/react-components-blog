import React from 'react';
import styles from '../styles/Post.module.css';

const Post = () => {
  return (
    <article className={styles.post}>
      <div className={styles.imageContainer}>
        <h2 className={styles.postTitle}>My First Blog Post</h2>
        <img
          src="/images/vollplaywom1.jpg"
          alt="Example"
          className={styles.postImage}
        />
      </div>
      <p className={styles.postContent}>
        Louisa Lippmann (Herford, 23 settembre 1994) è una pallavolista e
        giocatrice di beach volley tedesca.La carriera di Louisa Lippmann inizia
        nell'Herford per poi passare nel TPSV Bielefeld: nella stagione 2010-11
        viene ingaggiata dal Münster, nella 2. Bundesliga: nel campionato
        2011-12 viene aggregata sporadicamente alla prima squadra, in 1.
        Bundesliga, venendo definitivamente promossa nel campionato 2013-14.
        Nella stagione 2014-15 passa al Dresdner, con cui si aggiudica due
        scudetti e la Coppa di Germania 2015-16. Nel campionato 2016-17 cambia
        squadra, ingaggiata dallo Schweriner, con cui vince due scudetti e la
        Supercoppa tedesca 2017. Nella stagione 2018-19 si accasa alla
        formazione italiana del San Casciano, in Serie A1, mentre in quella
        seguente si trasferisce nella Chinese Volleyball Super League, che
        disputa con la maglia dello Shanghai. Al termine del campionato cinese,
        torna in patria, al club di Schwerin, per la seconda parte della 1.
        Bundesliga 2019-20. Nell'annata 2020-21 fa ritorno al club di Shanghai;
        nel gennaio 2021, alla conclusione del torneo, si trasferisce nella
        Superliga russa, accettando la proposta della Lokomotiv Kaliningrad per
        la parte finale della stagione, conquistando lo scudetto. Nel campionato
        2021-22 torna nella massima divisione italiana con la Savino Del Bene,
        con cui vince la Challenge Cup; al termine della stagione annuncia la
        sua intenzione di proseguire la propria carriera nel beach volley.Fa
        parte delle nazionali giovanili tedesche, fino al 2013, quando ottiene
        le prime convocazioni nella nazionale maggiore, con cui vince la
        medaglia d'argento all'European League 2014.
      </p>
    </article>
  );
};

export default Post;
