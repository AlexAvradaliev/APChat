import { TbCircleDashed } from 'react-icons/tb';
import { BiArchiveIn } from 'react-icons/bi';
import { CiSearch } from 'react-icons/ci';

import styles from './Chats.module.css';
import ChatCard from './ChatCard/ChatCard';

import { ChatList } from '../../data';
import Scroll from '../common/Scroll/Scroll';
import { useState } from 'react';

const Chats = () => {

    const [select, setSelect] = useState('');

    const onSelect = (id) => {
        setSelect(id);
    };
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h5 className={styles.header__title}>Chats</h5>
                    <TbCircleDashed className={styles.header__icon} />
                </header>
                <div className={styles.search}>
                    <CiSearch className={styles.search__icon} />
                    <input type='text' className={styles.search__input} />
                </div>
                <div className={styles.archive}>
                    <BiArchiveIn className={styles.archive__icon} />
                    <button to='#' className={styles.archive__btn}>
                        Archive
                    </button>
                </div>
                <div className={styles.divider}></div>
                <div className={`${styles.chat__wrapper} scroll`}>
                    <Scroll />
                    <p className={styles.text}>Pinned</p>
                    {ChatList.filter((el) => el.pinned).map((el, idx) => {
                        return <ChatCard key={el.id} {...el} onSelect={onSelect} select={select} />;
                    })}
                    <p className={styles.text}>All Chats</p>
                    {ChatList.filter((el) => !el.pinned).map((el, idx) => {
                        return <ChatCard key={el.id} {...el} onSelect={onSelect} select={select} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default Chats;
