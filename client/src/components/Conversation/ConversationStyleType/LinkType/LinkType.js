import styles from './LinkType.module.css';

const LinkType = ({ preview, message, incoming }) => {
    return (
        <article className={`${styles.wrapper} ${incoming ? styles.in : styles.out}`}>
            <a className={styles.link}>
                <img className={styles.image} src={preview} alt={message} />
                <h5 className={styles.name}>Creating Chat App using MERN</h5>
                <p className={styles.url}>youtube.com</p>
            </a>
            <p className={styles.text}>message</p>
        </article>
    );
};

export default LinkType;
