import { CSSProperties, memo } from "react";
import { ICirclePointProps } from "../../../types/types";

const CirclePoint = memo<ICirclePointProps>(
    ({ isActive, x, y, rotation, value, title, callback }) => {

        const style: CSSProperties = {
            transform: `
                translate(-50%, -50%)
                translate(${x}px, ${y}px)
                rotate(${-rotation}deg)  /* обратный поворот текста */
            `,
            transition: 'transform 0.5s ease'
        }

        return (
            <div
                className={`point_wrapper ${isActive ? 'active' : ''}`}
                style={style}
                onClick={callback}
            >
                <div className="point"/>
                <span>{value}</span>
                <p className={isActive ? 'active' : ''}>{title}</p>
            </div>
        );
    },
    (oldProps, newProps) => {
        if(oldProps.isActive !== newProps.isActive || oldProps.rotation !== newProps.rotation || oldProps.callback !== newProps.callback) return false; 
        return true
    }
);

export default CirclePoint;