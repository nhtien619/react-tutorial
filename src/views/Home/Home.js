import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AddTodo from "../Todos/AddTodo";
import AddHookTo from "../../components/functions/AddHookTo";
import NavigateHandler from "../../components/functions/NavigateHandler";

class Home extends React.Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.navigate('/about');
    //     }, 3000);
    // }

    render() {
        //console.log(this.props);
        return (
            <div>
                HOME PAGE
            </div>
        )
    }
}

// use function component handle call hook from class component

export default NavigateHandler(Home);