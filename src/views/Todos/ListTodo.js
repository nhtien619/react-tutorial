import React, { useMemo } from 'react'
import './ListTodo.scss'
import AddTodo from './AddTodo';

class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: Math.floor(Math.random() * 301), title: 'Marketing' },
            { id: Math.floor(Math.random() * 301), title: 'Bussiness' },
        ]
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

    render() {
        let { listTodos } = this.state;

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
                                            <span>{item.title}</span>
                                        </div>
                                        <div className="todo-child-button">
                                            <button>Edit</button>
                                            <button>Delete</button>
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