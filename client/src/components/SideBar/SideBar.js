import { useState } from 'react';
import { useSettingsContext } from '../../context/SettingsContext';
import Avatar from '../common/Avatar/Avatar';

import { Nav_Buttons } from './assets/data';
import logo from './assets/images/logo.png';

import styles from './SideBar.module.css';

const SideBar = () => {
    const [active, setActive] = useState(0);
    const { onToggleMode, themeMode } = useSettingsContext();

    return (
        <section className={styles.sideBar}>
            <div className={styles.logo}>
                <img src={logo} alt='AP chat logo' />
            </div>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    {Nav_Buttons.map((el) =>
                        el.index !== 3 ? (
                            <li
                                className={`${styles.item} ${el.index === active && styles.active}`}
                                key={el.index}
                                onClick={() => setActive(el.index)}>
                                {el.icon}
                            </li>
                        ) : (
                            <li className={styles.item} key={el.index}>
                                {el.icon}
                            </li>
                        ),
                    )}
                </ul>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <label className={styles.switch}>
                            <input type='checkbox' checked={themeMode === 'dark' ? false : true} onChange={onToggleMode} />
                            <span className={styles.slider}></span>
                        </label>
                    </li>
                    <li className={styles.item}>
                        <Avatar
                            src={
                                'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                            }
                            alt={'name'}
                        />
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default SideBar;
