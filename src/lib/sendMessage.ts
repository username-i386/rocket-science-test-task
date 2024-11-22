import { addMessage, type StateType } from '@/store/slices/chat.slice';
import { type MessageType } from '@/types';
import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';

export const sendMessage = (
    dispatch: ThunkDispatch<
        {
            chat: StateType;
        },
        undefined,
        UnknownAction
    >,
    message: MessageType,
) => {
    dispatch(addMessage(message));
};
