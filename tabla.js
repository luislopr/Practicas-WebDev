

const tabla = (props) => {
    return (
    <div id='header'>
        <h1 title='made in Reacs'> React Snake Game</h1>
    <p> Puntos: {props.puntos}</p>
        <p>Velocidad: {props.velocity} ms </p>
    </div>);
}
export default tabla;