import { AiOutlineLink } from 'react-icons/ai';
import { HiOutlineFaceSmile } from 'react-icons/hi2';
import { RiSendPlaneFill } from 'react-icons/ri';

import styles from './ConversationFooter.module.css';

const ConversationFooter = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.input}>
                <button className={styles.input__btn}><AiOutlineLink /></button>
                <input className={styles.input__input} />
                <button className={styles.input__btn}> <HiOutlineFaceSmile /></button>
            </div> 
                <button className={styles.send}><RiSendPlaneFill /></button>
        </div>
    );
};

export default ConversationFooter;
