import { useRef, useState } from 'react';

export const useSliderRef = () => {
    const slidesToShow = 3;
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        if (sliderRef.current) {
            sliderRef.current.scrollTo({
                left: index * (sliderRef.current.clientWidth / slidesToShow),
                behavior: 'smooth',
            });
        }
    };

    return { currentIndex, sliderRef, goToSlide };
};
