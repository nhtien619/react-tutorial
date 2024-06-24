import React from "react";
import { useNavigate } from 'react-router-dom';

const NavigateHandler = (WrappedComponent) => {
    const NavigateHookHandler = (props) => {
        const navigate = useNavigate();
        return <WrappedComponent {...props} navigate={navigate}></WrappedComponent>;
    }

    return NavigateHookHandler;
}

export default NavigateHandler;