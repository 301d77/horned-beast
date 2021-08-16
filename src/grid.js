import { Component } from "react";

class Grid extends Component {
    render() {
        return (
            <div className="grid">
                <Row index={0}/>
                <Row index={1}/>
                <Row index={2}/>
            </div>
        )
    }
}

function Row(props) {

    const startValue = props.index * 3;

    return (<div>
        <Square value={startValue + 1}/>
        <Square value={startValue + 2}/>
        <Square value={startValue + 3}/>
    </div>)
}

function Square(props) {
    return (
        <button>{props.value}</button>
    )
}

export default Grid;