export type ReviewType = {
    id: number;
    author: {
        username: string;
        avatar: string;
    };
    text: string;
    createdAt: number;
    likesCount: number;
    comments: string[];
    attachments: {
        id: number;
        src: string;
    }[];
};
