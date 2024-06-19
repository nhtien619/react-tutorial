import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AddTodo from "../Todos/AddTodo";
import AddHookTo from "../../components/functions/AddHookTo";

class Home extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigate('/about');

        }, 3000);
    }

    render() {
        console.log(this.props);


        return (
            <div>
                HOME PAGE


            </div>
        )
    }
}

export default AddHookTo(Home);