import React from 'react'
import github from '/src/assets/github.png';
import linkedIn from '/src/assets/linkedin.png';
import resume from '/src/assets/resume.png';
import styles from './Contact.css'

const Contact = () => (
  <div className={styles.Contact}>
    <a href='https://github.com/kevinfiero/shopify-frontend-challenge' target='_blank' rel='noreferrer'>
      <img src={github} alt='Github Icon' />
    </a>
    <a href='https://www.linkedin.com/in/kevinfiero/' target='_blank' rel='noreferrer'>
      <img src={linkedIn} alt='LinkedIn Icon' />
    </a>
    <a href='https://drive.google.com/file/d/1mSVHxaBoMWGOkCQ73B6QaeRu9B4WWlkg/view' target='_blank' rel='noreferrer'>
      <img src={resume} alt='Resume Icon' />
    </a>
  </div>
)

export default Contact
