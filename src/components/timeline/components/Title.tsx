import { ITitleProps } from '../../../types/types';

const Title = ({ children }: ITitleProps) => {
    return (
        <h1>
            {children}
        </h1>
    );
};

export default Title;