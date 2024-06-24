import React from "react";
import { useNavigate } from 'react-router-dom';


const AddHookTo = (Component) => {

    const CompWithHook = (props) => {
        console.log(props);
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate} />;
    }

    return CompWithHook;



}


export default AddHookTo;
