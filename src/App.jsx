import { useCallback, useEffect, useState } from 'react';
import './App.css'
import TodoContent from './components/TodoContent';

function App() {
  const today = new Date()

  const [todayDate, setTodayDate] = useState({
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate()
  })

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

  const convertMonth = () => {
    switch(todayDate.month) {
      case 1: 
      return "JAN"
      case 2: 
      return "FEB"
      case 3: 
      return "MAR"
      case 4: 
      return "APR"
      case 5: 
      return "MAY"
      case 6: 
      return "JUN"
      case 7: 
      return "JUL"
      case 8: 
      return "AUG"
      case 9: 
      return "SEP"
      case 10: 
      return "OCT"
      case 11: 
      return "NOV"
      case 12: 
      return "DEC"
      default: 
      return ""
    }
  }

  const onChecked = useCallback(id => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? {...todo, isChecked: !todo.isChecked } : todo
      )
    )
  }, [todos])

  const onImportant = useCallback(id => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? {...todo, isImportant: !todo.isImportant} : todo
      )
    )
  }, [todos])

  return (
    <div className="main-bg">
      <div>
        <div className="todo-container">

          <div className="todo-title-container">
            <div className="date-area">
              <div className="date-day">{todayDate.day}</div>
              <div className="date-mon-year">
                <div className="date-mon">{convertMonth()}</div>
                <div className="date-year">{todayDate.year}</div>
              </div>
            </div>
            <div className="title-area">TODO LIST</div>
          </div>

          <div className="todo-input-area">
            <input type="text" placeholder='추가할 할 일을 입력하세요' id="" />
            <span>⨁</span>
          </div>

          <div className="todo-list-container">
            {
              todos.map(todo => 
                <TodoContent key={todo.id} content={todo} onChecked={onChecked} onImportant={onImportant}/>
              )
            }
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
