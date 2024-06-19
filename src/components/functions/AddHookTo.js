import { Component } from "react";
import { useNavigate } from 'react-router-dom';


function AddHookTo(Component) {
    function CompWithHook(props) {
        const navigate = useNavigate();

        return <Component {...props} navigate={navigate} />;
    }

    return CompWithHook;

}


export default AddHookTo;
