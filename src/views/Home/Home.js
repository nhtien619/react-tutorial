import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AddTodo from "../Todos/AddTodo";
import AddHookTo from "../../components/functions/AddHookTo";
import NavigateHandler from "../../components/functions/NavigateHandler";
import { connect } from "react-redux";
import { Button, FormControl } from "react-bootstrap";
import { type } from "@testing-library/user-event/dist/type";
import { toast } from 'react-toastify';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
class Home extends React.Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.navigate('/about');
    //     }, 3000);
    // }
    state = {
        user: { id: 0, name: '' }
    }

    deleteUserHandler = (user) => {
        console.log("Delete user: ", user);
        this.props.deleteUserRedux(user);
    }

    onChangeName = (event) => {
        let user = this.state.user;
        user.id = Math.floor(Math.random() * 301);
        user.name = event.target.value
        this.setState({
            user: user
        })
    }

    addNewUserHandle = () => {
        let user = this.state.user;
        let lisUsers = this.props.dataRedux;

        if (!user || !user.name) {
            toast.warning("Request fields !!");
            return;
        }


        // console.log('>>> ', lisUsers.includes(lisUsers.find(item => item.name == user.name)));

        if (lisUsers && lisUsers.includes(lisUsers.find(item => item.name.toLowerCase() == user.name.toLowerCase()))) {
            toast.error("User " + `'${user.name}'` + " already exists.");
            return;
        }
        let data = this.props.addNewuserRedux(user);
        console.log('>>>>> addNewUserHandle', data);
        if (data) {
            this.setState({
                user: { id: 0, name: '' }
            })

            toast.success('Add successful.');
        }
        // this.setState({
        //     user: user
        // })
    }

    render() {
        let lisUsers = this.props.dataRedux;

        console.log('>>> Check props: ', this.state);
        return (
            <div className="m-2">
                <div>
                    HOME PAGE


                </div>



                <div className="d-flex flex-column mb-3" style={{ maxWidth: "400px" }}>

                    {/* <FloatingLabel controlId="floatingInput" label="User name" className="mb-2"
                        onChange={(event) => { this.onChangeName(event); }}>
                        <FormControl type="text" placeholder="user name"></FormControl>
                    </FloatingLabel> */}

                    <input className="mb-2" type="text" value={this.state.user.name} onChange={(event) => { this.onChangeName(event); }}></input>

                    <Button style={{ width: "fit-content", textAlign: "center" }} onClick={() => { this.addNewUserHandle(); }}>ADD NEW USER</Button>
                </div>

                <div className="d-flex flex-column">

                    {
                        lisUsers && lisUsers.length > 0 && lisUsers.map((item, index) => {
                            return (
                                <div key={item.id} className="d-flex align-items-center text-start mb-2">
                                    <div style={{ minWidth: "100px" }}>
                                        {index + 1} {item.name}
                                    </div>
                                    <div className="ml-2">
                                        <Button onClick={() => { this.deleteUserHandler(item); }}>DELETE</Button>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addNewuserRedux: (userAdd) => dispatch({ type: 'ADD_USER', payload: userAdd })
    }
}

// use function component handle call hook from class component
export default connect(mapStateToProps, mapDispatchToProps)(NavigateHandler(Home));