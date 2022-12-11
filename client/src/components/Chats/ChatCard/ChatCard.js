import Avatar from '../../common/Avatar/Avatar';
import styles from './ChatCard.module.css';

const ChatCard = ({ online, img, name, msg, time, unread, id, select, onSelect }) => {
    

    return (
        <article className={`${styles.card} ${select===id ? styles.active : ''}`} onClick={() => onSelect(id)}>
            <header className={styles.left}>
                <Avatar online={online === true ? 'online' : ''} src={img} alt={name} px={40} />
                <div className={styles.content}>
                    <h6 className={styles.content__name}>{name}</h6>
                    <p className={styles.content__msg}>{msg}</p>
                </div>
            </header>

            <div className={styles.right}>
                <time className={styles.right__time}>{time}</time>
                {unread > 0 && (
                    <div className={styles.badge}>
                        <p className={styles.badge__content}>{unread}</p>
                    </div>
                )}
            </div>
        </article>
    );
};

export default ChatCard;
