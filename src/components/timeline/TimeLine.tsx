import Circle from './components/Circle';
import Date from './components/Date';
import Title from './components/Title';
import './css/timeline.scss';

const TimeLine = () => {
    return (
        <section className='timeline'>
            <div className="v-line"></div>

            <Title>Исторические даты</Title>

            <div className="wrapper">
                <hr />

                <Circle number={6}/>

                <Date />
            </div>

            <div className="slider"></div>

        </section>
    );
};

export default TimeLine;