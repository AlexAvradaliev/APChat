import { useRef, useState } from 'react';
import data from '@emoji-mart/data/sets/14/facebook.json';
import Picker from '@emoji-mart/react';
import { AiOutlineLink } from 'react-icons/ai';
import { HiOutlineFaceSmile } from 'react-icons/hi2';
import { RiSendPlaneFill } from 'react-icons/ri';

import { useSettingsContext } from '../../../context/SettingsContext';
import useOutsideClick from '../../../hooks/useOutsideClick';

import styles from './ConversationFooter.module.css';

const ConversationFooter = () => {
    const ref = useRef();

    const { themeMode } = useSettingsContext();

    const [value, setValue] = useState('');
    const [open, setOpen] = useState(false);

    const valueHandler = (e) => {
        setValue(e.value);
    };

    const openHandler = (option) => {
        setOpen(option);
    };

    useOutsideClick(ref, () => openHandler(false));

    return (
        <div className={styles.footer}>
            <div className={styles.input}>
                <button className={styles.input__btn}>
                    <AiOutlineLink />
                </button>
                <input
                    className={styles.input__input}
                    placeholder='Write a message...'
                    onChange={valueHandler}
                    value={value}
                />
                <div ref={ref} className={styles.emoji}>
                    {open && (
                        <div className={styles.emoji__container}>
                            <Picker
                                data={data}
                                set='facebook'
                                perLine='7'
                                previewPosition='none'
                                dynamicWidth='true'
                                theme={themeMode === 'dark' ? 'dark' : 'light'}
                                emojiSize={20}
                                emojiButtonSize={28}
                            />
                        </div>
                    )}
                    <button className={styles.emoji__btn} onClick={() => openHandler(open ? false : true)}>
                        <HiOutlineFaceSmile />
                    </button>
                </div>
            </div>
            <button className={styles.send}>
                <RiSendPlaneFill />
            </button>
        </div>
    );
};

export default ConversationFooter;
