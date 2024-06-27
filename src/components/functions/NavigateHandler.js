import React from "react";
import { useNavigate, useParams } from 'react-router-dom';

const NavigateHandler = (WrappedComponent) => {
    const NavigateHookHandler = (props) => {
        const navigate = useNavigate();
        const useParam = useParams();
        return <WrappedComponent {...props} useParam={useParam} navigate={navigate}></WrappedComponent>;
    }

    return NavigateHookHandler;
}

export default NavigateHandler;