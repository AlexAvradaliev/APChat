import { IoMdRefresh, IoMdClose } from 'react-icons/io';
import { CgAlignLeft, CgAlignRight } from 'react-icons/cg';
import { RiFullscreenFill } from 'react-icons/ri';

import styles from './DrawerMenu.module.css';
import { useRef } from 'react';
import useOutsideClick from '../../../hooks/useOutsideClick';

const DrawerMenu = ({ open, dismiss }) => {
    const ref = useRef();

    useOutsideClick(ref, dismiss);

    if (!open) return null;

    return (
        <section ref={ref} className={styles.wrapper}>
            <div className={styles.header}>
                <h5 className={styles.header__text}>Settings</h5>
                <div>
                    <button className={styles.header__button}>
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

            <div className={styles.presets}>
                <p className={styles.text}>Presets</p>
                <div className={styles.presets__grid}>
                    <button className={`${styles.presets__button} ${styles.active}`}>
                        <span className={styles.blue}></span>
                    </button>
                    <button className={styles.presets__button}>
                        <span className={styles.violet}></span>
                    </button>
                    <button className={styles.presets__button}>
                        <span className={styles.skyBlue}></span>
                    </button>
                    <button className={styles.presets__button}>
                        <span className={styles.green}></span>
                    </button>
                    <button className={styles.presets__button}>
                        <span className={styles.orange}></span>
                    </button>
                    <button className={styles.presets__button}>
                        <span className={styles.red}></span>
                    </button>
                </div>
            </div>

            <button className={`${styles.full} ${styles.active}`}>
                <RiFullscreenFill />
                <p className={styles.full__text}>Fullscreen</p>
            </button>
        </section>
    );
};

export default DrawerMenu;
