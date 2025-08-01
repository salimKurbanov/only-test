import { ISlideProps } from "../../../types/types";

const Slide = ({ title, description }: ISlideProps) => {
    return (
        <div className='slide'>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Slide;