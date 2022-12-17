const TodoInput = ({ text, onChangeTodoText, onAddTodo }) => {
    return (
        <div className="todo-input-area">
            <input type="text" placeholder='추가할 할 일을 입력하세요' value={text} onChange={onChangeTodoText} />
            <span onClick={onAddTodo}>⨁</span>
        </div>
    )
}

export default TodoInput