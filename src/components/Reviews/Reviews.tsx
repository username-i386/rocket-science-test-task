import { REVIEWS } from '@/constants/reviews.constants';
import { Review } from './Review';
import { useSliderRef } from '@/hooks';
import s from './Reviews.module.scss';
import cn from 'classnames';

export const Reviews = () => {
    const { currentIndex, goToSlide, sliderRef } = useSliderRef();

    return (
        <div className={s.root}>
            <h2 className={s.title}>Отзывы о Барселоне</h2>
            <div className={s.slider_container}>
                <button
                    onClick={() => goToSlide(currentIndex - 1)}
                    disabled={currentIndex === 0}
                    className={s.buttons}
                />
                <div ref={sliderRef} className={s.slider}>
                    {REVIEWS.map(review => (
                        <div key={review.id} className={s.slide}>
                            <Review review={review} />
                        </div>
                    ))}
                </div>
                <button
                    onClick={() => goToSlide(currentIndex + 1)}
                    disabled={currentIndex === REVIEWS.length - 2}
                    className={s.buttons}
                />
            </div>
            <footer className={s.footer}>
                <a href='#' className={s.overview}>
                    Все отзывы
                </a>
                <div className={s.comtroller}>
                    {Array(REVIEWS.length - 1)
                        .fill(null)
                        .map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={cn(s.dote, {
                                    [s.dote_active]: currentIndex === index,
                                })}
                            />
                        ))}
                </div>
            </footer>
        </div>
    );
};
