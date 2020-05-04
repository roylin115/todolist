class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.change = this.change.bind(this)
    }
    render() {
        let todoItems = this.state.todos.map(item => <ToDo key={item.id} item={item} change={this.change} />)
        return (
            <div className="todo-list"> 
                {todoItems}
            </div>
        )
    }

    change(id) {
        this.setState(prev => {
            let updated = prev.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            return {
                todos: updated
            }
        })
        console.log("Changed", id)
    }
}
