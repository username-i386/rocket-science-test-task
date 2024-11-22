import { useAppDispatch, useAppSelector } from '@/hooks';
import s from './GalleryModal.module.scss';
import { AttachmentsType } from '@/types';
import { changeCurrentPic, closeGallery } from '@/store/slices/gallery.slice';
import { useModalRef } from '@/hooks';

export const GalleryModal = () => {
    const { attachments, currentPicture } = useAppSelector(state => state.gallery);
    const dispatch = useAppDispatch();
    const modalRef = useModalRef(closeGallery);

    const onChangePic = (picture: AttachmentsType) => {
        dispatch(changeCurrentPic(picture));
    };

    return (
        <div className={s.root}>
            <div ref={modalRef} className={s.modal}>
                <div>
                    <img
                        src={currentPicture?.src}
                        alt={`Barcelona ${currentPicture?.id}`}
                        className={s.main_img}
                    />
                </div>
                <div className={s.gallery}>
                    {attachments.map(attachment => (
                        <button
                            key={attachment.id}
                            onClick={() => onChangePic(attachment)}
                        >
                            <img
                                src={attachment.src}
                                alt={`Barcelona ${attachment.id}`}
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
