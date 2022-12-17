import { BiVideo, BiPhone, BiSearch } from 'react-icons/bi';
import {AiOutlineDown} from 'react-icons/ai'

import Avatar from '../../common/Avatar/Avatar';

import { ChatList } from '../../../data';
import styles from './ConversationHeader.module.css';

const ConversationHeader = () => {
    return (
        <header className={styles.header}>
            <ul className={styles.items}>
                <li className={styles.item}>
                    <Avatar px={40} src={ChatList[0].img} online={ChatList[0].online} />
                </li>
                <li className={styles.item}>
                    <h6 className={styles.item__name}>{ChatList[0].name}</h6>
                    <p className={styles.item__desc}>{ChatList[0].online ? 'Online' : 'Offline'}</p>
                </li>
            </ul>
            <ul className={styles.items}>
                <li className={styles.item}>
                    <button className={styles.item__btn}>
                        <BiVideo />
                    </button>
                </li>
                <li className={styles.item}>
                    <button className={styles.item__btn}>
                        <BiPhone />
                    </button>
                </li>
                <li className={styles.item}>
                    <button className={styles.item__btn}>
                        <BiSearch />
                    </button>
                </li>
                <li className={styles.divider}></li>
                <li className={styles.item} >
                    <button className={`${styles.item__btn} ${styles.down}`}>
                        <AiOutlineDown />
                    </button>
                </li>
            </ul>
        </header>
    );
};

export default ConversationHeader;
