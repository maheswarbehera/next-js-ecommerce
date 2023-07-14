import React from 'react';
import styles from '@/styles/maheswar.module.css';
import Navbar from '@/component/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const contact = () => {
  return (
    <>
    <Navbar/>
    <div className={styles.div}>
      Contact page
    </div>
    </>
  );
}

export default contact;
