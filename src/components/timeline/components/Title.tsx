import { ITitleProps } from '../../../types/types';

const Title = ({ children }: ITitleProps) => {
    return (
        <h1 className='main_title'>
            {children}
        </h1>
    );
};

export default Title;