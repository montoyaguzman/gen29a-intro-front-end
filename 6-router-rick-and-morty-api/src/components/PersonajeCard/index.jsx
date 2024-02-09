import { NavLink } from "react-router-dom";

const PersonajeCard = (props) => {
  const { id, name, image, status, species } = props;
  return (
    <div className="col">
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {status} - {species}
          </p>
        </div>
        <div className="card-footer text-center">
            {/* Cambiamos de pantalla y le concatenamos el id del personaje */}
          <NavLink to={`/character/${id}`} className="btn btn-primary">
            Ver personaje
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PersonajeCard;
