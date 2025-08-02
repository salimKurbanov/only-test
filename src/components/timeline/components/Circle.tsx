import { ICircleProps } from "../../../types/types";
import useCircle from "../../../hooks/useCircle";

const Circle = ({ page, callback, points }: ICircleProps) => {
    const hook = useCircle({page, callback, points});

    return <div className="circle" style={hook.style}>{hook.renderPoints()}</div>
};

export default Circle;
