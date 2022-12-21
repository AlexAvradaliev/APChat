import styles from './ReplyMsg.module.css';

const ReplyMsg = ({reply, message, incoming}) => {
    return (
        <div className={`${styles.wrapper} ${incoming ? styles.in : styles.out}`}>
            <div className={styles.message}>
                <p className={styles.message__msg}>{message}</p>
            </div>
            <p className={styles.replay__msg}>{reply}</p>
        </div>
    );
};

export default ReplyMsg;
