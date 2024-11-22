import womanAvatar1 from '@/assets/womanAvatar1.png';
import womanAvatar2 from '@/assets/womanAvatar2.png';
import { MessageType } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type StateType = {
    chat: MessageType[];
};
const yesterdayTimestamp = new Date().setDate(new Date().getDate() - 1);

const initialState: StateType = {
    chat: [
        {
            author: {
                id: 0,
                avatar: womanAvatar1,
            },
            id: '0',
            createdAt: yesterdayTimestamp,
            text: 'Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотелf бы отметить очень важную область исследования ',
        },
        {
            author: {
                id: 1,
                avatar: womanAvatar2,
            },
            id: '1',
            text: 'Что из себя представляет вулкан? Просто хочу убедиться, что готова к такому путешествию.',
            createdAt: yesterdayTimestamp,
        },
        {
            author: {
                id: 0,
                avatar: womanAvatar1,
            },
            id: '2',
            createdAt: yesterdayTimestamp,
            text: 'Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотелf бы отметить очень важную область исследования ',
        },
        {
            author: {
                id: 1,
                avatar: womanAvatar2,
            },
            id: '3',
            text: 'Что из себя представляет вулкан? Просто хочу убедиться, что готова к такому путешествию.',
            createdAt: yesterdayTimestamp,
        },
    ],
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<MessageType>) => {
            state.chat.unshift(action.payload);
        },
    },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
