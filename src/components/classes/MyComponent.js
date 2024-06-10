import React from "react";

class MyComponent extends React.Component {

    state = {
        name: "Tom", age: "32", place: "SaiGon"
    }

    hanleOnChange = (event) => {
        this.setState({
            name: event.target.value
        })

        console.log(event);
        console.log(event.target);
    }

    handleOnClick = () => {
        alert("Click !!");

    }

    render() {
        return (
            <div>
                <div style={{ textAlign: "left" }}>
                    <label>Name</label><br></br>
                    <input value={(this.state.name)}
                        style={{ fontSize: 20, color: "red" }}
                        type="text"
                        onChange={(event) => { this.hanleOnChange(event); }} />
                </div>
                <div style={{ textAlign: "center" }}>
                    <button
                        style={{ minWidth: 80, fontSize: 16, padding: 5, borderRadius: 14, border: "1px solid #fff" }}
                        onClick={this.handleOnClick}>
                        ADD
                    </button>
                </div>
                <div>
                    <p>I am {this.state.age} years old, i live in {this.state.place}</p>
                </div>


            </div>
        )
    }
}


export default MyComponent;