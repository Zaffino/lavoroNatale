import React from "react"

/**
 * imposta da cosa è composto un todo.
 * il todo contiene il testo e 2 bottoni.
 * il testo se è completato viene sbarrato.
 */
export default (props) => (
    <div style={{
        display: "flex",
        justifyContent: "center"
    }}>

        <div style={{
            textDecoration: props.todo.completato ? "line-through" : ""
        }}>{props.todo.testo}</div>
        <button onClick={props.seEliminato}>✗</button>
        <button onClick={props.toggleComplete}>✓</button>
    </div>
)