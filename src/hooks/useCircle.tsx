import { CSSProperties, ReactNode } from "react";
import { ICircleProps } from "../types/types";
import CirclePoint from "../components/timeline/components/CirclePoint";

export default function useCircle({ page, callback, points }: ICircleProps) {
    const RADIUS = 265;
    const number = points.length;

    const rotation = -(360 / number) * (page - 1);
    const offset = -Math.PI / 4;

    const style: CSSProperties = { transform: `rotate(${rotation}deg)` }

    const renderPoints = (): ReactNode => {
        return points.map((el, i) => {
           const angle = (2 * Math.PI / number) * i + offset;
            const x = RADIUS * Math.cos(angle);
            const y = RADIUS * Math.sin(angle);
            const value = i + 1;

            return (
                <CirclePoint 
                    key={i} 
                    x={x} 
                    y={y} 
                    isActive={value === page} 
                    rotation={rotation} 
                    title={el}
                    value={value}
                    callback={() => callback(value)}
                />
            );
        });
    }

    return {
        style,
        renderPoints
    }
}