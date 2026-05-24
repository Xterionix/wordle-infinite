import { CSSProperties, ReactNode } from 'react';
import './Key.css';

interface Props {
    char: string;
    children?: ReactNode;
    style?: CSSProperties;
    onClick: (char: string) => void
}

export function Key({ char, children, style, onClick }: Props) {

    return (
        <div className="key ion-display-flex ion-align-items-center ion-justify-content-center" style={style} onClick={() => onClick(char)}>
            {children ?? char}
        </div>
    );
};