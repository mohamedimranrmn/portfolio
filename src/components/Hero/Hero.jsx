import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h5 className={styles.title}>Hi, I'm Mohamed Imran</h5>
        <p className={styles.description}>
            I am a dedicated software developer with a strong emphasis on problem-solving and creating user-friendly websites. I
            take pride in being a collaborative team player, always eager to learn and grow
        </p>
        <a href="mailto:mohamed2512imran@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
