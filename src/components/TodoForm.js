import React , {useState, useEffect , useRef} from 'react';


function TodoForm(props) {

const [input , setInput] = useState(props.edit ? props.edit : '');

const InputRef = useRef(null);

useEffect(() => {
    InputRef.current.focus();
})

const handleClick = e => {
    setInput(e.target.value);
}

const handleSubmit= e =>{
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
    })
    setInput('')
}

    return (
        <form className="todo-form" onSubmit={handleSubmit} >
        {props.edit ? (
            <>
            <input type="text" 
            placeholder = "Update your Todo"
             value={input}
              className="todo-input edit" 
              name="text"
               onChange={handleClick}
                   ref = { InputRef}
                   
               />
            <button type="submit" className="todo-button edit">Update</button>
            </>
        ) : (
<>
            <input type="text" 
            placeholder = "Add a Todo"
             value={input}
              className="todo-input" 
              name="text"
               onChange={handleClick}
                   ref = { InputRef}
                   
               />
            <button type="submit" className="todo-button">ADD</button>
            </>
        )}
          
        </form>
    )
}

export default TodoForm
