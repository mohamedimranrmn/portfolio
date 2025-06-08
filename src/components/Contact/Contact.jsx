import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
      <footer id="contact" className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>Let's Connect</h2>
            <p className={styles.subtitle}>
              Passionate to contribute to projects, collaborate with like-minded individuals, and explore new opportunities.
            </p>
          </div>

          <div className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <div className={styles.iconWrapper}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
              </div>
              <div className={styles.contactInfo}>
                <h3>Email</h3>
                <a href="mailto:mohamed2512imran@gmail.com">
                  mohamed2512imran@gmail.com
                </a>
              </div>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.iconWrapper}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
              </div>
              <div className={styles.contactInfo}>
                <h3>LinkedIn</h3>
                <a href="https://linkedin.com/in/mohamed-imran-rmn-206713253" target="_blank" rel="noopener noreferrer">
                  Connect with me
                </a>
              </div>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.iconWrapper}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
              </div>
              <div className={styles.contactInfo}>
                <h3>GitHub</h3>
                <a href="https://github.com/mohamedimranrmn" target="_blank" rel="noopener noreferrer">
                  View my code
                </a>
              </div>
            </div>
          </div>

          <div className={styles.footer}>
            <div className={styles.divider}></div>
            <p className={styles.copyright}>
              © 2025 Mohamed Imran. Built with passion
            </p>
          </div>
        </div>
      </footer>
  );
};