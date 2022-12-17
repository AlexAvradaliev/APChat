import styles from './Avatar.module.css';

const Avatar = ({src, alt, online, px}) => {
    const sizeImage = {width: `${px}px`, height: `${px}px`}
    const sizeBadge = {width: `${px/5}px`, height: `${px/5}px`}
    return (
        <div className={styles.wrapper} style={sizeImage}>
            <img
             className={styles.avatar}
             src={src}
             alt={alt}
             style={sizeImage}
             />
             {online && 
            <span className={styles.badge} style={sizeBadge}></span>
             }
        </div>
    );
};

export default Avatar;
