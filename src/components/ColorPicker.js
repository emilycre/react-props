import React from 'react';
import styles from './ColorPicker.css';

export default function ColorPicker() {
  const salmonHandler = () => {
    console.log('Salmon.');
  };

  const goldHandler = () => {
    console.log('Gold.');
  };

  const blueHandler = () => {
    console.log('Blue.');
  };

  return (
    <section className={styles.ColorPicker}>
      <button className={styles.salmon} onClick={salmonHandler}>Salmon.</button>
      <button className={styles.gold} onClick={goldHandler}>Yellow.</button>
      <button className={styles.blue} onClick={blueHandler}>Blue-ish.</button>
    </section>
  );
}
