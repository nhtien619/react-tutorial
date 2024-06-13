import React from "react";

class AddTodo extends React.Component {
    state = { title: '' }

    onChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        });
    }

    handleAddTodo = (event) => {
        if (!this.state.title) {
            alert("Request fields !");
            return;
        }

        this.props.addToto({
            title: this.state.title
        })

        this.setState({ title: '' });

    }

    render() {
        return (
            <div className="list-to">
                <input type="text" onChange={(event) => { this.onChangeTitle(event); }} value={this.state.title} />
                <button type="button" onClick={(event) => { this.handleAddTodo(event) }}>ADD</button>
            </div>
        )
    }
}

export default AddTodo;