import { ITimeLineProps } from '../../types/types';
import Circle from './components/Circle';
import CircleNavigation from './components/CircleNavigation';
import Date from './components/Date';
import Slider from './components/Slider';
import Title from './components/Title';
import './css/timeline.scss';

const TimeLine = ({ maxPage, page, from, to, list, sliderRef, points, handlePage, handleNext, handlePrev }: ITimeLineProps) => {
    return (
        <section className='timeline'>
            <Title>Исторические даты</Title>

            <div className="wrapper">
                <Circle page={page} callback={handlePage} points={points}/>

                <Date from={from} to={to}/>
            </div>

            <div className="bottom_wrapper">
                <CircleNavigation 
                    page={page}
                    maxPage={maxPage} 
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                />

                <Slider list={list} sliderRef={sliderRef}/>
            </div>
        </section>
    );
};

export default TimeLine;