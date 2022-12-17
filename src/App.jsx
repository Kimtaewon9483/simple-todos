import { useCallback, useState, useRef } from 'react';
import './App.css'
import TodoContent from './components/TodoContent';
import TodoInput from './components/TodoInput';
import TodoTitle from './components/TodoTitle';

function App() {
  const today = new Date()
  const index = useRef(4)

  const [todayDate, setTodayDate] = useState({
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate()
  })

  const [todoText, setTodoText] = useState("")

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "방 청소하기",
      isImportant: false,
      isChecked: false,
    },
    {
      id: 2,
      text: "조례",
      isImportant: false,
      isChecked: false,
    },
    {
      id: 3,
      text: "세혁이형 집 가기",
      isImportant: false,
      isChecked: false,
    },
  ])

  const onChecked = useCallback(id => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? {...todo, isChecked: !todo.isChecked } : todo
      )
    )
  }, [todos])

  const onImportant = useCallback(id => {
    const tempTodoLIst = [...todos]
    tempTodoLIst.map(todo =>
      todo.id === id ? todo.isImportant = !todo.isImportant : todo
    )
    const index = tempTodoLIst.findIndex(todo => todo.id === id)
    let countOfImportant = 0
    tempTodoLIst.forEach(todo => {
      if (todo.isImportant) {
        countOfImportant += 1
      }
    })
    if (tempTodoLIst[index].isImportant) {
      const item = tempTodoLIst.splice(index, 1)
      tempTodoLIst.splice(0, 0, item[0])
    } else {
      const item = tempTodoLIst.splice(index, 1)
      tempTodoLIst.splice(countOfImportant, 0, item[0])
    }
    setTodos([...tempTodoLIst])
  }, [todos])

  const onChangeTodoText = (e) => {
    setTodoText(e.target.value)
  }

  const onAddTodo = useCallback(() => {
    const newTodo = {
      id: index.current,
      text: todoText,
      isImportant: false,
      isChecked: false,
    }
    index.current += 1
    setTodos([newTodo, ...todos])
    setTodoText("")
  }, [todos, todoText])

  const deleteTodo = useCallback(id => {
    const filteredTodoList = todos.filter(item => item.id !== id);
    setTodos(filteredTodoList)
  }, [todos])

  return (
    <div className="main-bg">
      <div className="todo-container">
        <TodoTitle today={todayDate} />
        
        <TodoInput text={todoText} onChangeTodoText={onChangeTodoText} onAddTodo={onAddTodo} />
        <div className="todo-list-container">
          {
            todos.map(todo => 
              <TodoContent key={todo.id} content={todo} onChecked={onChecked} onImportant={onImportant} deleteTodo={deleteTodo}/>
            )
          }
        </div>

      </div>
    </div>
  );
}

export default App;
