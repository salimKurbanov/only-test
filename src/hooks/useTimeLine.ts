import { useEffect, useRef, useState } from "react"
import { LIST } from "../constants/constants"
import { usePageStore } from "../store/usePage"

export default function useTimeLine() {
    const { page, nextPage, prevPage, toPage } = usePageStore()

    const points = Object.values(LIST).map(item => item.title);
    const [list, setList] = useState(LIST[1].list || [])

    const sliderRef = useRef<HTMLDivElement>(null)

    const maxPage = Object.keys(LIST).length

    // Функции навигации колеса
    const handleNext = () => nextPage(maxPage)
    const handlePrev = () => prevPage()
    const handlePage = (page: number) => toPage(page)

    // Смена списка
    const changeList = (page: number) => {
        if (!sliderRef.current) return;

        const slider = sliderRef.current

        const onAnimationEnd = (e: AnimationEvent) => {
            switch (e.animationName) {
                case 'Hide':
                    setList(LIST[page].list);
                    slider.style.animation = 'Appear 0.7s ease-in-out forwards';
                    break;
                case 'Appear':
                    slider.style.animation = '';
                    slider.removeEventListener('animationend', onAnimationEnd);
                    break;
            }
        };

        slider.addEventListener('animationend', onAnimationEnd);
        slider.style.animation = 'Hide 0.2s ease-in-out forwards';
    };

    //запуск функций при смене страниц
    useEffect(() => {
        changeList(page)
    }, [page])

    return {
        page,
        maxPage,
        list,
        sliderRef,
        points,
        handleNext,
        handlePrev,
        handlePage
    }
}