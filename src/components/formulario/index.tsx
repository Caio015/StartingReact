import React from "react";
import Botao from "../botao";
import style from './Formulario.module.scss'

class Formulario extends React.Component {

    render(): React.ReactNode {
        
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione uma nova matéria
                    </label>
                    <input type= "text" name="tarefa" id="tarefa" placeholder= "O que você gostaria de estudar?" required></input>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input type = "time" step= "1" name="tempo" id="tempo" min="00:00:00" max="01:30:00"></input>
                </div>
                <Botao texto="Adicionar"></Botao>
            </form>
        )
    }

}

export default Formulario 