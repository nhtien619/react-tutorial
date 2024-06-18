import React, { useMemo } from 'react'
import './ListTodo.scss'
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: Math.floor(Math.random() * 301), title: 'Marketing' },
            { id: Math.floor(Math.random() * 301), title: 'Bussiness' },
        ],
        editTodo: {},
    }

    // Add new
    addToto = (addTodo) => {
        let newId = Math.floor(Math.random() * 301);
        console.log('==> new Id: ' + newId + "- title: ", addTodo.title);
        let current = this.state.listTodos;
        current.push({ id: newId, title: addTodo.title });
        this.setState({
            listTodos: current
        })

    }

    handleDelete = (todo) => {
        console.log(todo);
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodos
        })

        toast.success('Delete success.');
    }

    handleEdit = (todo) => {

        let { editTodo, listTodos } = this.state;
        let isEmptyObject = Object.keys(todo).length === 0;

        // Save edit
        if (isEmptyObject === false && todo.id === editTodo.id) {
            let listTodosCopy = [...listTodos];
            let index = listTodosCopy.findIndex(a => a.id === todo.id);
            if (index >= 0) {
                listTodosCopy[index].title = editTodo.title;

                this.setState({
                    listTodos: listTodosCopy,
                    // set back editTodo = {} to renderEdit
                    editTodo: {}
                });

                toast.success('Edit success.');
            }
            return;
        } else {

        }

        this.setState({
            editTodo: todo
        });
    }

    handleOnChangeEdit = (event) => {
        let inputChange = event.target.value;
        if (!inputChange) {
            this.setState({
                isShowSave: false
            })
        } else {
            this.setState({
                isShowSave: true
            })

            let currentEdit = { ...this.state.editTodo };
            currentEdit.title = inputChange;

            this.setState({
                editTodo: currentEdit
            })
        }
    }

    renderEdit(isEmptyObject, editTodo, item) {
        //console.log('renderEdit >> ', isEmptyObject);
        if (!isEmptyObject && editTodo.id === item.id) {
            return (
                <>
                    <input value={editTodo.title} onChange={(event) => { this.handleOnChangeEdit(event); }}></input>
                </>
            )
        } else {
            return (<><span>{item.title}</span></>)
        }

    }

    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObject = Object.keys(editTodo).length === 0;
        // console.log('>> isEmptyObject: ', isEmptyObject)
        return (
            <>
                <div>
                    Sample TODO Apps with ReactJs
                </div>

                <div className="list-todo-container">
                    {/* Add to do component */}
                    <AddTodo addToto={this.addToto} />

                    <div className="list-todo-content">
                        {
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        <div className="todo-child-title">
                                            <span>{index + 1}.</span>
                                            {this.renderEdit(isEmptyObject, editTodo, item)}
                                        </div>
                                        <div className="todo-child-button">
                                            <button
                                                onClick={() => this.handleEdit(item)}>
                                                {!isEmptyObject && editTodo.id === item.id ? 'Save' : 'Edit'}
                                            </button>

                                            <button
                                                onClick={() => { this.handleDelete(item) }}>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default ListTodo