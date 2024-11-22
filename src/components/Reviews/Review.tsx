import { type AttachmentsType, type ReviewType } from '@/types';
import LikeIcon from '@/assets/icons/like.svg?react';
import s from './Review.module.scss';
import cn from 'classnames';
import { transformCreatedDate } from '@/lib';
import { useAppDispatch } from '@/hooks';
import { openGallery } from '@/store/slices/gallery.slice';

export const Review = ({ review }: { review: ReviewType }) => {
    const dispatch = useAppDispatch();
    const createdDate = transformCreatedDate(review.createdAt);

    const onOpenGallery = (
        attachments: AttachmentsType[],
        currentPicture: AttachmentsType,
    ) => {
        dispatch(openGallery({ attachments, currentPicture }));
    };

    return (
        <div className={s.root}>
            <header className={s.header}>
                <img
                    src={review.author.avatar}
                    alt={`${review.author.username} avatar`}
                />
                <p>{review.author.username}</p>
            </header>
            <h2 className={s.title}>
                <span>БАРСЕЛОНА</span> — О городе:
            </h2>
            <p className={s.text}>{review.text}</p>
            <div className={s.gallery}>
                {review.attachments.map((attachment, idx, attachments) => {
                    if (idx < 4) {
                        return (
                            <button
                                key={attachment.id}
                                className={s.gallery_item}
                                onClick={() => onOpenGallery(attachments, attachment)}
                            >
                                <img
                                    src={attachment.src}
                                    alt={`Barcelona ${attachment.id}`}
                                    className={s.pic}
                                />
                                <p className={cn(s.disabled, { [s.active]: idx === 3 })}>
                                    +{attachments.length - idx}
                                </p>
                            </button>
                        );
                    }
                })}
            </div>
            <footer className={s.footer}>
                <div>
                    <p>{createdDate}</p>
                    <p className={s.divider}>.</p>
                    <p>{review.comments.length} коментариев</p>
                </div>
                <div>
                    <LikeIcon />
                    <p>{review.likesCount}</p>
                </div>
            </footer>
        </div>
    );
};
