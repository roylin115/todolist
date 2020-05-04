function ToDo(prop) {

    let completedStyle = {
        textDecoration: "line-through"
    }
    return (
    <div className="todo-item">
        <input 
            type="checkbox" 
            onChange={() => prop.change(prop.item.id)} 
            checked={prop.item.completed} >
        </input>
    <p style={prop.item.completed ? completedStyle: null}>{prop.item.text}</p>
    </div>
    )
}