import styles from './Conversation.module.css';
import ConversationFooter from './ConversationFooter/ConversationFooter';
import ConversationHeader from './ConversationHeader/ConversationHeader';

const Conversation = () => {
    return (
        <section className={styles.container}>
            <ConversationHeader />
            <ConversationFooter />
        </section>
    );
};

export default Conversation;
