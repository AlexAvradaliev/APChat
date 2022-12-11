import { useSettingsContext } from '../../../../context/SettingsContext';

import styles from './DrawerPreset.module.css';
const DrawerPreset = () => {
    const { onChangeColor, themeColor } = useSettingsContext();
    return (
        <div className={styles.presets}>
            <p className={styles.text}>Presets</p>
            <div className={styles.presets__grid}>
                <button className={`${styles.presets__button} ${themeColor=== 'blue'? styles.active : ''}`} onClick={() =>{onChangeColor('blue')}}>
                    <span className={styles.blue}></span>
                </button>
                <button className={`${styles.presets__button} ${themeColor=== 'violet'? styles.active : ''}`} onClick={() =>{onChangeColor('violet')}}>
                    <span className={styles.violet}></span>
                </button>
                <button className={`${styles.presets__button} ${themeColor=== 'skyBlue'? styles.active : ''}`} onClick={() =>{onChangeColor('skyBlue')}}>
                    <span className={styles.skyBlue}></span>
                </button>
                <button className={`${styles.presets__button} ${themeColor=== 'green'? styles.active : ''}`} onClick={() =>{onChangeColor('green')}}>
                    <span className={styles.green}></span>
                </button>
                <button className={`${styles.presets__button} ${themeColor=== 'orange'? styles.active : ''}`} onClick={() =>{onChangeColor('orange')}}>
                    <span className={styles.orange}></span>
                </button>
                <button className={`${styles.presets__button} ${themeColor=== 'red'? styles.active : ''}`} onClick={() =>{onChangeColor('red')}}>
                    <span className={styles.red}></span>
                </button>
            </div>
        </div>
    );
};

export default DrawerPreset;
