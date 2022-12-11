import { IoOptions } from 'react-icons/io5';

import styles from './DrawerButton.module.css';

const DrawerButton = ({ open }) => {
    return (
        <span className={styles.wrapper} onClick={open}>
            <button className={styles.button__icon}>
                <IoOptions />
            </button>
        </span>
    );
};

export default DrawerButton;
