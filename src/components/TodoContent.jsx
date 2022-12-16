const TodoContent = ({ content, onChecked, onImportant }) => {
    const { id, text, isImportant, isChecked} = content

    console.log(isChecked);

    return (
        <div className="todo-list-area">
            <div className="left-content">
                <input type="checkbox" onChange={() => onChecked(id)} />
                <span className={`todo-content is-checked-${isChecked}`}>{text}</span>
            </div>
            <div className="right-content">
                <span className={`todo-important is-important-${isImportant}`} onClick={() => onImportant(id)}>{isImportant ?  "★" : "☆"}</span>
                <span className='todo-delete'>⊖</span>
            </div>
        </div>
    )
}

export default TodoContent