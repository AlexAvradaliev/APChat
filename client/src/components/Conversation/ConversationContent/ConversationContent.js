import ScrollableFeed from 'react-scrollable-feed'

import { Chat_History } from '../../../data/chats';
import Scroll from '../../common/Scroll/Scroll';
import ConversationStyleType from '../ConversationStyleType';
import styles from './ConversationContent.module.css';

const ConversationContent = () => {
    return (<>
            <Scroll selector='conversation' />
        <div className={`${styles.container}`} >
                <ScrollableFeed className='conversation'>
                    
                {Chat_History.map((el, i) => {
                   return el.type === 'divider' 
                    ?  (
                    <div key={i} className={`${styles.wrapper} ${styles.wrapper__left} `}>
                   <ConversationStyleType el={el}/>
                </div>
                    )
                   : el.incoming ? (
                        <div key={i} className={`${styles.wrapper} ${styles.wrapper__left} `}>
                            <div className={styles.lf}><ConversationStyleType el={el}/></div>
                        </div>
                    ) : (
                        <div key={i} className={`${styles.wrapper} ${styles.wrapper__right} `}>
                            <div className={styles.rf}><ConversationStyleType el={el}/></div>
                        </div>
                    )
                })}
              
                </ScrollableFeed>
        </div>
                </>
    );
};

export default ConversationContent;
