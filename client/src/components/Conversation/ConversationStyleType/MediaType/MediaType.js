import styles from './MediaType.module.css';

const MediaType = ({ img, message, incoming }) => {
    return (
        <>
            {message ? (
                <div className={`${styles.wrapper} ${incoming ?styles.in : styles.out}`}>
                    <img className={styles.image} src={img} alt={message} />
                    <p className={styles.text}>{message}</p>
                </div>
            ) : (
                <img className={styles.image} src={img} alt={message} />
            )}
        </>
    );
};

export default MediaType;
