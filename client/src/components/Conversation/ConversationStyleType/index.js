import DocType from './DocType/DocType';
import LinkType from './LinkType/LinkType';
import MediaType from './MediaType/MediaType';
import MessageType from './MessageType/MessageType';
import ReplyMsg from './ReplyMsg/ReplyMsg';
import TimeLine from './TimeLine/TimeLine';

const ConversationStyleType = ({ el }) => {
    {
        switch (el.type) {
            case 'divider':
                return <TimeLine {...el} />;

            case 'msg':
                switch (el.subtype) {
                    case 'img':
                        return <MediaType {...el} />;

                    case 'doc':
                        return <DocType {...el} />;

                    case 'link':
                        return <LinkType {...el} />;

                    case 'reply':
                        return <ReplyMsg {...el} />;

                    default:
                        return <MessageType {...el} />;
                }

            default:
                return <></>;
        }
    }
};

export default ConversationStyleType;
