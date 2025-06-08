import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState("Resume");
  const [isDownloading, setIsDownloading] = useState(false);

  const handleResumeDownload = (e) => {
    e.preventDefault();

    if (isDownloading) return; // Prevent multiple clicks

    setIsDownloading(true);
    setDownloadStatus("Downloading...");

    try {
      // Create download link
      const link = document.createElement('a');

      // Option 1: If you have a resume file in your public folder
      link.href = '/resume.pdf'; // Make sure to place your resume.pdf in the public folder

      link.download = 'Imran_Software_Developer_Resume.pdf'; // This will be the downloaded filename
      link.target = '_blank';

      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadStatus("Downloaded!");

      // Reset after 2 seconds
      setTimeout(() => {
        setDownloadStatus("Resume");
        setIsDownloading(false);
      }, 2000);

    } catch (error) {
      console.error('Download failed:', error);
      setDownloadStatus("Download failed");

      // Reset after 2 seconds
      setTimeout(() => {
        setDownloadStatus("Resume");
        setIsDownloading(false);
      }, 2000);
    }
  };

  return (
      <nav className={styles.navbar}>
        <a className={styles.title} href="/">
          {/* Add your logo/title text here if needed */}
        </a>
        <div className={styles.menu}>
          <img
              className={styles.menuBtn}
              src={
                menuOpen
                    ? getImageUrl("nav/closeIcon.png")
                    : getImageUrl("nav/menuIcon.png")
              }
              alt="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
          />
          <ul
              className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
              onClick={() => setMenuOpen(false)}
          >
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a
                  href="#"
                  onClick={handleResumeDownload}
                  className={isDownloading ? styles.downloading : ''}
              >
                {downloadStatus}
              </a>
            </li>
          </ul>
        </div>
      </nav>
  );
};