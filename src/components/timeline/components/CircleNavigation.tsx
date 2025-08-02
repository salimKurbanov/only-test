import { ICircleNavProps } from "../../../types/types";
import { formatPageNumber } from "../../../utils/utils";
import CircleNavBtn from "./CircleNavBtn";

const CircleNavigation = ({  page, maxPage, handleNext, handlePrev }: ICircleNavProps) => {
    return (
        <div className='circle_navigation'>
            <div className="pagination">
                {formatPageNumber(page)}/{formatPageNumber(maxPage)}
            </div>
            
            <div className="control">
                <CircleNavBtn direction="prev" disabled={page === 1} callback={handlePrev}/>
                <CircleNavBtn direction="next" disabled={page === maxPage} callback={handleNext}/>
            </div>
        </div>
    );
};

export default CircleNavigation;