import React from "react"

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