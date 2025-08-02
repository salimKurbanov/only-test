import { useEffect, useRef, useState } from "react"
import { TypeIncrement } from "../types/types"
import { LIST } from "../constants/constants"

export default function useTimeLine() {
    const points = Object.values(LIST).map(item => item.title);
    const [page, setPage] = useState(1)
    const [list, setList] = useState(LIST[1].list || [])
    const [from, setFrom] = useState(LIST[1].from || 0)
    const [to, setTo] = useState(LIST[1].to || 0)

    const sliderRef = useRef<HTMLDivElement>(null)
    const intervalFrom = useRef<ReturnType<typeof setInterval> | null>(null)
    const intervalTo = useRef<ReturnType<typeof setInterval> | null>(null)

    const maxPage = Object.keys(LIST).length

    // Функции навигации колеса
    const handleNext = () => setPage(prev => prev === maxPage ? prev : prev + 1)
    const handlePrev = () => setPage(prev => prev === 1 ? prev : prev - 1)
    const handlePage = (page: number) => setPage(page)

    // Смена периода
    const animateNumber = (page: number) => {
        const target = LIST[page]
        incrementNumber(from, target.from, intervalFrom, setFrom)
        incrementNumber(to, target.to, intervalTo, setTo)
    }

    // Анимация чисел
    const incrementNumber: TypeIncrement = (start, target, ref, callback) => {
        if (start === target) return

        const step = target > start ? 1 : -1
        let index = start

        ref.current = setInterval(() => {
            index += step
            callback(index)

            if (index === target) clearInterval(ref.current!)
        }, 80)
    }

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
                default:
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
        animateNumber(page)
        changeList(page)

        return () => {
            if(intervalFrom.current) clearInterval(intervalFrom.current)
            if(intervalTo.current) clearInterval(intervalTo.current)
        }
    }, [page])

    return {
        from,
        to,
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