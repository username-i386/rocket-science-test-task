import { MessageType, UserType } from '@/types';
import { nanoid } from '@reduxjs/toolkit';

export const createMessage = (author: UserType, text: string): MessageType => ({
    author: {
        id: author.id,
        avatar: author.avatar,
    },
    id: nanoid(),
    createdAt: new Date().getTime(),
    text,
});
