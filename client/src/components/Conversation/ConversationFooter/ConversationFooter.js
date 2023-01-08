import { useRef, useState } from 'react';

import EmojiPicker from 'emoji-picker-react';
import { AiOutlineLink } from 'react-icons/ai';
import { HiOutlineFaceSmile } from 'react-icons/hi2';
import { RiSendPlaneFill } from 'react-icons/ri';

import SubMenu from '../../common/SubMenu/SubMenu';
import { useSettingsContext } from '../../../context/SettingsContext';
import useOutsideClick from '../../../hooks/useOutsideClick';

import { iconsMenu } from '../../../data/menus';
import styles from './ConversationFooter.module.css';

const ConversationFooter = () => {
    const ref = useRef();
    const refMenu = useRef();

    const { themeMode } = useSettingsContext();

    const [value, setValue] = useState('');
    const [open, setOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const valueHandler = (e) => {
        setValue(e.value);
    };

    const openHandler = (option) => {
        setOpen(option);
    };

    const openMenuHandler = (option) => {
        setOpenMenu(option);
    };

    useOutsideClick(ref, () => openHandler(false));
    useOutsideClick(refMenu, () => openMenuHandler(false));

    return (
        <div className={styles.footer}>
            <div className={styles.input}>
                <div ref={refMenu} className={styles.menu__wrapper}>
                    <button className={styles.input__btn} onClick={() => openMenuHandler(openMenu ? false : true)}>
                        <AiOutlineLink />
                    </button>
                    {openMenu && <SubMenu bottom='45px' left='430px' options={iconsMenu} variant='2' />}
                </div>

                <input
                    className={styles.input__input}
                    placeholder='Write a message...'
                    onChange={valueHandler}
                    value={value}
                />
                <div ref={ref} className={styles.emoji}>
                    {open && (
                        <div className={styles.emoji__container}>
                            <EmojiPicker
                                skinTonesDisabled='true'
                                lazyLoadEmojis='true'
                                theme={themeMode === 'dark' ? 'dark' : 'light'}
                                onEmojiClick={console.log}
                                emojiStyle='google'
                                width={300}
                                height={300}
                                previewConfig={{ showPreview: false }}
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
