import React from "react";

class MyComponent extends React.Component {

    state = {
        name: "Tom", age: "32", place: "SaiGon"
    }

    hanleOnChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }


    render() {
        return (
            <div>
                <input value={(this.state.name)}
                    style={{ fontSize: 20, color: "red" }}
                    type="text"
                    onChange={(event) => { this.hanleOnChange(event); }} />
                <p>This is Class Component here, my name is {this.state.name}</p>
                <p>I am {this.state.age} years old, i live in {this.state.place}</p>
            </div>
        )
    }
}


export default MyComponent;