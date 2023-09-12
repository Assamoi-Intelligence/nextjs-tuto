import React from 'react'
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>c 2023 Assamoi. All right reserved</div>
        <div>
          <div className={styles.social}>
            <Image src={'/1.png'} alt='Intelligence dev' className={styles.icon} width={15} height={15}/>
            <Image src={'/2.png'} alt='Intelligence dev' className={styles.icon} width={15} height={15}/>
            <Image src={'/3.png'} alt='Intelligence dev' className={styles.icon} width={15} height={15}/>
            <Image src={'/4.png'} alt='Intelligence dev' className={styles.icon} width={15} height={15}/>
          </div>
        </div>
    </div>
  )
}

export default Footer