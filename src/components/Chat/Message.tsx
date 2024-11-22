import { MessageType } from '@/types';
import s from './Message.module.scss';
import { transformCreatedDate } from '@/lib';

export const Message = ({ message }: { message: MessageType }) => {
    const createdDate = transformCreatedDate(message.createdAt);

    return (
        <div className={s.root}>
            <div className={s.avatar}>
                <img src={message.author.avatar} alt={`avatar ${message.author.id}`} />
            </div>
            <div>
                <p className={s.message}>{message.text}</p>
                <p className={s.time}>{createdDate}</p>
            </div>
        </div>
    );
};
