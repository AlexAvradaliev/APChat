import { useRef } from 'react';
import { IoMdRefresh, IoMdClose } from 'react-icons/io';

import styles from './DrawerMenu.module.css';
import useOutsideClick from '../../../hooks/useOutsideClick';
import { useSettingsContext } from '../../../context/SettingsContext';
import DrawerPreset from './DrawerPreset/DrawerPreset';
import Fullscreen from './Fullscreen/Fullscreen';
import DrawerDirection from './DrawerDirection/DrawerDirection';

const DrawerMenu = ({ open, dismiss }) => {
    const { onResetSetting, themeDirection } = useSettingsContext();
    const ref = useRef();

    useOutsideClick(ref, dismiss);

    if (!open) {
        return null;
    }

    return (
        <section ref={ref} className={`${styles.wrapper} ${themeDirection === 'ltr' ? styles.ltr :styles.rtl}`}>
            <div className={styles.header}>
                <h5 className={styles.header__text}>Settings</h5>
                <div>
                    <button className={styles.header__button} onClick={onResetSetting}>
                        <IoMdRefresh />
                    </button>
                    <button className={styles.header__button} onClick={dismiss}>
                        <IoMdClose />
                    </button>
                </div>
            </div>

            <div className={styles.divider}></div>

            <DrawerDirection />
            <DrawerPreset />
            <Fullscreen />
        </section>
    );
};

export default DrawerMenu;
