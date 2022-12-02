import styles from './Avatar.module.css';

const Avatar = ({src, alt, online}) => {
    return (
        <div className={styles.wrapper}>
            <img
             className={styles.avatar}
             src={src}
             alt={alt}
             />
             {online && 
            <span className={styles.badge}></span>
             }
        </div>
    );
};

export default Avatar;
