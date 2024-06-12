import { FC, ReactNode } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

interface ICustomSimpleBar {
    children: ReactNode;
    height: number;
}

const CustomSimpleBar: FC<ICustomSimpleBar> = ({ height, children }) => {
    return (
        <SimpleBar style={{ maxHeight: height }} className="react-simplebar">
            {children}
        </SimpleBar>
    );
};

export default CustomSimpleBar;
