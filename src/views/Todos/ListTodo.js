import React from 'react'
import './ListTodo.scss'

class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: Math.floor(Math.random() * 301), title: 'Marketing' },
            { id: Math.floor(Math.random() * 301), title: 'Bussiness' },
        ]
    }


    render() {
        let { listTodos } = this.state;

        return (
            <>
                <div>
                    Sample TODO Apps with ReactJs
                </div>

                <div className="list-todo-container">
                    <div className="list-to">
                        <input type='text' />
                        <button type='button'>ADD</button>
                    </div>
                </div>

                <div className="list-todo-content">
                    {
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child">
                                    <span>{item.title}</span>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </div>
                            )
                        })


                    }
                </div>
            </>
        )
    }

}

export default ListTodo