import { CSSProperties, ReactNode } from 'react';
import './Key.css';

interface Props {
    char: string;
    children?: ReactNode;
    style?: CSSProperties;
}

export function Key({ char, children, style }: Props) {

    return (
        <div className="key ion-display-flex ion-align-items-center ion-justify-content-center" style={style}>
            {children ?? char}
        </div>
    );
};