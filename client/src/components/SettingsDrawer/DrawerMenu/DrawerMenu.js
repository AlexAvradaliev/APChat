import { useRef } from 'react';
import { IoMdRefresh, IoMdClose } from 'react-icons/io';
import { CgAlignLeft, CgAlignRight } from 'react-icons/cg';
import { RiFullscreenFill } from 'react-icons/ri';

import styles from './DrawerMenu.module.css';
import useOutsideClick from '../../../hooks/useOutsideClick';
import { useSettingsContext } from '../../../context/SettingsContext';
import DrawerPreset from './DrawerPreset/DrawerPreset';

const DrawerMenu = ({ open, dismiss }) => {
    const { onResetSetting } = useSettingsContext();
    const ref = useRef();

    useOutsideClick(ref, dismiss);

    if (!open) {
        return null;
    }

    return (
        <section ref={ref} className={styles.wrapper}>
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

            <div className={styles.direction}>
                <p className={styles.text}>Direction</p>
                <div>
                    <button className={`${styles.direction__button} ${styles.active}`}>
                        <CgAlignLeft />
                    </button>
                    <button className={styles.direction__button}>
                        <CgAlignRight />
                    </button>
                </div>
            </div>
            <DrawerPreset />
            <button className={`${styles.full} ${styles.active}`}>
                <RiFullscreenFill />
                <p className={styles.full__text}>Fullscreen</p>
            </button>
        </section>
    );
};

export default DrawerMenu;
