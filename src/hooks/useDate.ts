import { useEffect, useRef, useState } from "react";
import { usePageStore } from "../store/usePage";
import { TypeIncrement } from "../types/types";

export default function useDate() {
    const { page, data } = usePageStore()
    const intervalFrom = useRef<ReturnType<typeof setInterval> | null>(null)
    const intervalTo = useRef<ReturnType<typeof setInterval> | null>(null)

    const [from, setFrom] = useState(data[1].from)
    const [to, setTo] = useState(data[1].to)

    // Смена периода
    const animateNumber = (page: number) => {
        const target = data[page]
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

    useEffect(() => {
        animateNumber(page)

        return () => {
            if(intervalFrom.current) clearInterval(intervalFrom.current)
            if(intervalTo.current) clearInterval(intervalTo.current)
        }
    }, [page])

    return {
        from,
        to,
    }
}