import { CgAlignLeft, CgAlignRight } from 'react-icons/cg';

import { useSettingsContext } from '../../../../context/SettingsContext';

import styles from './DrawerDirection.module.css'

const DrawerDirection = () => {

    const { onChangeDirection, themeDirection } = useSettingsContext();

  return (
    <div className={styles.direction}>
                <p className={styles.text}>Direction</p>
                <div>
                    <button className={`${styles.direction__button} ${themeDirection === 'ltr' ? styles.active : ''}`} onClick={()=>{onChangeDirection('ltr')}}>
                        <CgAlignLeft />
                    </button>
                    <button className={`${styles.direction__button} ${themeDirection === 'rtl' ? styles.active : ''}`} onClick={()=>{onChangeDirection('rtl')}}>
                        <CgAlignRight />
                    </button>
                </div>
            </div>
  )
}

export default DrawerDirection