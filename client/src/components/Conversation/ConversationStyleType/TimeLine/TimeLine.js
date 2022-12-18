import styles from './TimeLine.module.css';

const TimeLine = ({text}) => {
    return (
        <>
            <div className={styles.divider}></div>
            <time className={styles.date}>{text}</time>
            <div className={styles.divider}></div>
        </>
    );
};

export default TimeLine;
