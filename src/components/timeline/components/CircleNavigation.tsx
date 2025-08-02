import { ICircleNavProps } from "../../../types/types";
import CircleNavBtn from "./CircleNavBtn";

const CircleNavigation = ({  page, maxPage, handleNext, handlePrev, disabledNext, disabledPrev }: ICircleNavProps) => {
    return (
        <div className='circle_navigation'>
            <div className="pagination">
                {page}/{maxPage}
            </div>
            
            <div className="control">
                <CircleNavBtn direction="prev" disabled={disabledPrev} callback={handlePrev}/>
                <CircleNavBtn direction="next" disabled={disabledNext} callback={handleNext}/>
            </div>
        </div>
    );
};

export default CircleNavigation;