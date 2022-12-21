import styles from './Conversation.module.css';
import ConversationContent from './ConversationContent/ConversationContent';
import ConversationFooter from './ConversationFooter/ConversationFooter';
import ConversationHeader from './ConversationHeader/ConversationHeader';

const Conversation = () => {
    return (
        <section className={styles.container}>
            <ConversationHeader />
            <ConversationContent />
            <ConversationFooter />
        </section>
    );
};

export default Conversation;
