import castleImg from '@/assets/castle.png';
import s from './Overview.module.scss';

export const Overview = () => {
    return (
        <div className={s.root}>
            <div>
                <img src={castleImg} alt='castle Barcelona' />
            </div>
            <div>
                <h1 className={s.title}>Барселона - обзор города</h1>
                <p className={s.subtitle}>
                    Барселона с её золотистыми пляжами, архитектурными шедеврами Гауди,
                    многочисленными фестивалями и гастрономическим разнообразием
                    понравилась мне в первый же день пребывания и стала местом, в
                    котором...
                </p>
                <a href='#' className={s.more_link}>
                    Читать дальше
                </a>
            </div>
        </div>
    );
};
