import React from 'react';
import Item from './Todo';

const TodoList = props =>{
    return (
        <div className='todo-list'>
            {props.todo.map(item =>(
                <Item toggleItem={props.toggleItem} key={item.id} item={item}/>
            ))}
            <button className='clear-btn' onClick={props.clearCompleted}>Clear Completed</button>
        </div>
    );
}

export default TodoList;