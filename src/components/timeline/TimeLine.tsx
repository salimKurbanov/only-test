import { ITimeLineProps } from '../../types/types';
import { formatPageNumber } from '../../utils/utils';
import Circle from './components/Circle';
import CircleNavigation from './components/CircleNavigation';
import Date from './components/Date';
import Slider from './components/Slider';
import Title from './components/Title';
import './css/timeline.scss';

const TimeLine = ({ maxPage, page, list, sliderRef, points, handlePage, handleNext, handlePrev }) => {
    return (
        <section className='timeline'>
            <Title>Исторические даты</Title>

            <div className="wrapper">
                <hr />

                <Circle page={page} callback={handlePage} points={points}/>

                <Date />
            </div>

            <div className="bottom_wrapper">
                <CircleNavigation 
                    page={formatPageNumber(page)}
                    maxPage={formatPageNumber(maxPage)} 
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                    disabledNext={page === maxPage}
                    disabledPrev={page === 1}
                />

                <Slider list={list} sliderRef={sliderRef}/>
            </div>
        </section>
    );
};

export default TimeLine;