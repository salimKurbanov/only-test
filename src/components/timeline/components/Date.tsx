import { IDates } from "../../../types/types";

const Date = ({ from, to }: IDates) => {
    
    return (
        <div className='date'>
            <span className="blue">{from}</span>
            <span className="purple">{to}</span>
        </div>
    );
};

export default Date;