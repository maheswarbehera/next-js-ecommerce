import React from 'react';
import styles from '@/styles/maheswar.module.css';
import Navbar from '@/component/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const about = () => {
  return (
    <>
    <Navbar/>
    <div className={styles.div}>
      About page
    </div>
    <div className='container'>
      <strong>About page goes here</strong>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illum accusamus, dolores saepe, minus quis nam debitis esse beatae, nemo incidunt consectetur amet impedit minima officia aperiam in? Vel, dolore?</p>
    </div>
    </>
  );
}

export default about;
