import { Link } from "react-router-dom";
import "../../../css/styles.css";
import React from "react";

const TablaComentarioPorPuntuacion = (props) => {
	const { Titulo, Modelo, buscarTermino, handleProductChange } = props;
	const cantidad = Modelo.length;

	return (
		<div className="table-container">
			<div className="rojo">
				<p>{Titulo}</p>
				<p>Cantidad de comentarios: {cantidad}</p>
			</div>
			<div className="buscar">
				<div className="input-wrapper">
					<label htmlFor="">Buscar: </label>
					<input
						type="text"
						value={buscarTermino} // buscarTermino
						onChange={handleProductChange} // handleInputChange
						placeholder="Buscar por Puntuación"
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
									<th className="top-izquierda">Usuario</th>
									<th>Puntuación</th>
									<th>Descripción</th>
									<th>Comentario</th>
									<th className="top-derecha">Producto</th>
								</tr>
							</thead>

							<tbody>
								{Modelo.map((modelo) => {
									return (
										<tr key={modelo.usuario}>
											<td>{modelo.usuario}</td>
											<td>{modelo.puntuacion}</td>
											<td>{modelo.producto}</td>
											<td>{modelo.descripcion}</td>
											<td>{modelo.comentario}</td>
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

export default TablaComentarioPorPuntuacion;
