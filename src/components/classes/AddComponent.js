import React from "react";


class AddComponent extends React.Component {
    state = {
        id: '', title: "", salary: 0
    }

    handlerOnChangedTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handlerOnChangedSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handlerOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);

        if (!this.state.title || !this.state.salary) {
            alert("Request fields !");
            return
        }

        this.props.addNewjob({
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
            salary: this.state.salarys
        });

        this.setState({
            title: '', salary: 0
        })
    }



    render() {
        return (
            <>
                <form style={{ textAlign: "left", "fontSize": 16 }}>
                    <label>Job Title</label><br />
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(event) => { this.handlerOnChangedTitle(event); }} /><br />
                    <label>Salary</label><br />
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(event) => { this.handlerOnChangedSalary(event); }} /><br />
                    <button style={{ "marginTop": 10 }} type="button" onClick={(event) => { this.handlerOnSubmit(event) }}>Submit</button>
                </form>


            </>
        )
    }
}

export default AddComponent 