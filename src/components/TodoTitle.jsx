const TodoTitle = ({ today }) => {
    const convertMonth = () => {
        switch(today.month) {
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
    
    return (
        <div className="todo-title-container">
            <div className="date-area">
                <div className="date-day">{today.day}</div>
                <div className="date-mon-year">
                    <div className="date-mon">{convertMonth()}</div>
                    <div className="date-year">{today.year}</div>
                </div>
            </div>
            <div className="title-area">TODO LIST</div>
        </div>
    )
}

export default TodoTitle