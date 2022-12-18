import { RiDownload2Line } from 'react-icons/ri';
import { HiOutlineDocumentText } from 'react-icons/hi2';

import styles from './DocType.module.css';

const DocType = ({ message, incoming }) => {
    return (
        <article className={`${styles.wrapper} ${incoming ? styles.in : styles.out}`}>
            <div className={styles.icons}>
                <HiOutlineDocumentText />
                <button className={styles.icon__btn}>
                    <RiDownload2Line />
                </button>
                <h6 className={styles.name}>Abstract.png</h6>
            </div>
            <p className={styles.text}>{message}</p>
        </article>
    );
};

export default DocType;
