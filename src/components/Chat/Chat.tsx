import { type UserType } from '@/types';
import FlagIcon from '@/assets/icons/flag.svg?react';
import StarIcon from '@/assets/icons/star.svg?react';
import SendIcon from '@/assets/icons/send.svg?react';
import s from './Chat.module.scss';
import { Message } from './Message';
import { useState } from 'react';
import { createMessage } from '@/lib';
import { sendMessage } from '@/lib';
import { useAppDispatch, useAppSelector } from '@/hooks';

interface ChatProps {
    user: UserType;
    participant: UserType;
}

export const Chat = ({ user, participant }: ChatProps) => {
    const chat = useAppSelector(state => state.chat.chat);
    const dispatch = useAppDispatch();
    const [message, setMessage] = useState('');

    const onClickSendBtn = (author: UserType, text: string) => {
        if (text.trim() !== '') {
            const message = createMessage(author, text);
            sendMessage(dispatch, message);
            setMessage('');
        }
    };

    const onEnterDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        author: UserType,
        text: string,
    ) => {
        if (e.key === 'Enter') {
            onClickSendBtn(author, text);
        }
    };

    return (
        <div className={s.root}>
            <h2 className={s.title}>
                {user.isAdmin ? 'Чат с пользователем' : 'Чат с администратором'}
            </h2>
            <div>
                <header className={s.header}>
                    <div className={s.user}>
                        <img
                            src={participant.avatar}
                            alt={`${participant.username} avatar`}
                        />
                        <div>
                            <p className={s.username}>{participant.username}</p>
                            <p className={s.job_title}>
                                <FlagIcon />
                                <span>{participant.jobTitle}</span>
                            </p>
                        </div>
                    </div>
                    <div className={s.rating}>
                        {Array(5)
                            .fill(null)
                            .map((_, idx) => (
                                <StarIcon
                                    fill={
                                        idx < participant.rating ? '#F5A623' : '#f1ebdb'
                                    }
                                    key={idx}
                                />
                            ))}
                    </div>
                </header>
                <div className={s.messages}>
                    {chat.map(message => (
                        <Message key={message.id} message={message} />
                    ))}
                </div>
                <footer className={s.footer}>
                    <div>
                        <img src={user.avatar} alt={`avatar ${user.username}`} />
                    </div>
                    <div>
                        <input
                            type='text'
                            className={s.input}
                            placeholder='Напишите сообщение...'
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            onKeyDown={e => onEnterDown(e, user, message)}
                        />
                    </div>
                    <button onClick={() => onClickSendBtn(user, message)}>
                        <SendIcon />
                    </button>
                </footer>
            </div>
        </div>
    );
};
