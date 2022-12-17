import styles from './MessageType.module.css';

const MessageType = ({ message, incoming }) => {
    return (
        <div>
            <p className={`${styles.text} ${incoming ?styles.in : styles.out}`}>{message}</p>
        </div>
    );
};

export default MessageType;
