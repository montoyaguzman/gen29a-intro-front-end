import './index.css';

function Card({ name, alias }) {

    // const name = props.name; 
    // const alias = props.alias;
    // const { name, alias } = props; // destructing

    return (
        <>
            <div>Mi nombre es: {name} {alias}</div>
        </>
    );
}

export { Card };