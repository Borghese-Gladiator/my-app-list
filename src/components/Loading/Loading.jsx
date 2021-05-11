import React from 'react';
import styles from './Loading.module.css';

// Created using comments from: https://dev.to/xinnks/make-animated-content-placeholders-with-html-and-css-3ekn
function Loading() {
  return (
    <div className={styles.screen}>
      <div className={styles.loading}></div>
    </div>
  )
}

export default Loading;