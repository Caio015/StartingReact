import React from "react";
import Item from "./item";
import style from './Lista.module.scss'

function Lista() {

    const listaDeTarefas  = [{
        tarefa : 'React',
        tempo : '00:30:00'
    }, {
        tarefa : 'Javascript',
        tempo : '00:20:00'
    },
    {
        tarefa : 'CSS',
        tempo : '00:15:00'
    }]

    return (

        <aside className={style.listaTarefas}>
            <h2>Estudos do dia:</h2>
            <ul>
                {listaDeTarefas.map((item, index ) => (
                   <Item key = {index} {...item}></Item>
                ))}
            </ul>
        </aside>
        )
}

export default Lista; 