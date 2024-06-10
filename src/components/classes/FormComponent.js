import React from "react";
import ChildComponent from "./ChildComponent";
//import FuctionComponent from "../functions/FunctionComponent";

class FormComponent extends React.Component {
    state = {
        fname: '',
        lstname: '',
        jobs: [
            { id: 1, title: "Officer", salary: 1000 },
            { id: 2, title: "Doctor", salary: 1200 },
            { id: 3, title: "Guard", salary: 600 },
        ]
    }

    handlerOnChangedFName = (event) => {
        this.setState({
            fname: event.target.value
        })
    }

    handlerOnChangedLstName = (event) => {
        this.setState({
            lstname: event.target.value
        })
    }

    handlerOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }


    render() {
        return (
            <>
                <form style={{ textAlign: "left" }}>
                    <label>First name</label><br />
                    <input
                        type="text"
                        value={this.state.fname}
                        onChange={(event) => { this.handlerOnChangedFName(event); }} /><br />
                    <label>Last name</label><br />
                    <input
                        type="text"
                        value={this.state.lstname}
                        onChange={(event) => { this.handlerOnChangedLstName(event); }} /><br />
                    <button type="button" onClick={(event) => { this.handlerOnSubmit(event) }}>Submit</button>
                </form>
                <ChildComponent
                    name={this.state.fname}
                    age={20}
                    jobs={this.state.jobs} />

                {/* <FuctionComponent name={this.state.fname}
                    age={20} jobs={this.state.jobs} /> */}
            </>
        )
    }
}

export default FormComponent;