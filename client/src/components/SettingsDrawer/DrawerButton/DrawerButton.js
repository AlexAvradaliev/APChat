import { IoOptions } from 'react-icons/io5';

import { useSettingsContext } from '../../../context/SettingsContext';

import styles from './DrawerButton.module.css';

const DrawerButton = ({ open }) => {
    const { themeDirection } = useSettingsContext();
    return (
        <span className={`${styles.wrapper} ${themeDirection === 'ltr' ? styles.ltr :styles.rtl}`} onClick={open}>
            <button className={styles.button__icon}>
                <IoOptions />
            </button>
        </span>
    );
};

export default DrawerButton;
