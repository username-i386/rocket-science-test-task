import { Chat } from '../Chat/Chat';
import { Overview } from '../Overview/Overview';
import s from './App.module.scss';
import { Reviews } from '../Reviews/Reviews';
import { ADMIN, USER } from '@/constants';
import { useAppSelector } from '@/hooks';
import { GalleryModal } from '../GalleryModal/GalleryModalt';

function App() {
    const isOpenGalleryModal = useAppSelector(state => state.gallery.isOpen);

    return (
        <>
            <div className={s.root}>
                <Overview />
                <Reviews />
                <div className={s.chat}>
                    <Chat user={ADMIN} participant={USER} />
                    <Chat user={USER} participant={ADMIN} />
                </div>
            </div>
            {isOpenGalleryModal && <GalleryModal />}
        </>
    );
}

export default App;
