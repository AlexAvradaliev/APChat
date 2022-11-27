import { BsChatDots, BsTelephone } from 'react-icons/bs';
import { TbUsers } from 'react-icons/tb';
import { AiOutlineSetting } from 'react-icons/ai';
import styles from './style.module.css'

export const Nav_Buttons = [
    {
        index: 0,
        icon: <BsChatDots className={styles.icon} />,
    },
    {
        index: 1,
        icon: <TbUsers className={styles.icon} />,
    },
    {
        index: 2,
        icon: <BsTelephone className={styles.icon} />,
    },
    {
        index: 3,
        icon: <div className={styles.divider}></div>,
    },
    {
        index: 4,
        icon: <AiOutlineSetting className={styles.icon} />,
    },
];
