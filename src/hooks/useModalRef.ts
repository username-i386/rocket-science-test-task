import { useEffect, useRef } from 'react';
import { useAppDispatch } from './useAppDispatch';
import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit';

export const useModalRef = (closeAction: ActionCreatorWithoutPayload) => {
    const modalRef = useRef<HTMLDivElement | null>(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                dispatch(closeAction());
            }
        };

        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                dispatch(closeAction());
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [closeAction, dispatch]);

    return modalRef;
};
