import useDate from "../../../hooks/useDate";

const Date = () => {
    const hook = useDate()

    return (
        <div className='date'>
            <span className="blue">{hook.from}</span>
            <span className="purple">{hook.to}</span>
        </div>
    );
};

export default Date;