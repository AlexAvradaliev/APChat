import { useRef, useState } from 'react';
import { BiVideo, BiPhone, BiSearch } from 'react-icons/bi';
import { AiOutlineDown } from 'react-icons/ai';

import Avatar from '../../common/Avatar/Avatar';
import SubMenu from '../../common/SubMenu/SubMenu';
import useOutsideClick from '../../../hooks/useOutsideClick';

import { ChatList } from '../../../data';
import { chatMenu } from '../../../data/menus';
import styles from './ConversationHeader.module.css';

const ConversationHeader = () => {
    const ref = useRef();
    const [open, setOpen] = useState(false);

    const openHandler = (o) => () => {
        setOpen(o);
    };

    useOutsideClick(ref, openHandler(false));

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
                <li className={styles.item} ref={ref}>
                    <button className={`${styles.item__btn} ${styles.down}`} onClick={openHandler(open ? false : true)}>
                        <AiOutlineDown />
                    </button>
                    {open && <SubMenu options={chatMenu} open={open}  variant='1' top='58px' right='1px' />}
                </li>
            </ul>

            
        </header>
    );
};

export default ConversationHeader;
