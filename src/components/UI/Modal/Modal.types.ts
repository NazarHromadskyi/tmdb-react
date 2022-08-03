import { Dispatch } from 'react';

export interface IModal {
    isActive: boolean;
    setIsActive: Dispatch<boolean>;
    children: JSX.Element;
}
