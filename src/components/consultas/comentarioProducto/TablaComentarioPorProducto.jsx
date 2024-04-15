import { Link } from "react-router-dom";
import React from "react";
import "../../../css/styles.css";

const TablaCPP = (props) => {
	const { Titulo, Modelo, buscarTermino, handleProductChange } = props;
	const cantidad = Modelo.length;

	// funcion para cambiar un formato DateTime a Date
	const formatoFecha = (x) => {
		const date = new Date(x);
		return date.toLocaleDateString("es-ES");
	};
	return (
		<div className="table-container">
			<div className="rojo">
				<p>{Titulo}</p>
				<p>Cantidad de comentarios: {cantidad}</p>
			</div>
			<div className="buscar">
				<div>
					<label htmlFor="">Buscar: </label>
					<input
						type="text"
						value={buscarTermino} // buscarTermino
						onChange={handleProductChange} // handleInputChange
						placeholder="Buscar por Producto"
					/>

					<Link to="/" className="back">
						Regresar
					</Link>
				</div>
			</div>

			<div className="separador">
				<div className="div-externo">
					<div className="div-interno">
						<table className="table table-striped table-hover custom-table">
							<thead className="">
								<tr>
									<th className="top-izquierda">Producto</th>
									<th>Descripción</th>
									<th>Comentario</th>
									<th>Fecha</th>
									<th className="top-derecha">Puntuación</th>
								</tr>
							</thead>

							<tbody>
								{Modelo.map((modelo) => {
									return (
										<tr key={modelo.producto}>
											<td>{modelo.producto}</td>
											<td>{modelo.descripcion}</td>
											<td>{modelo.comentario}</td>
											<td>
												{formatoFecha(modelo.fecha)}
											</td>
											<td>{modelo.puntuacion}</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TablaCPP;
