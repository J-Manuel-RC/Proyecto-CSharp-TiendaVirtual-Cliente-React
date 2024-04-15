
import { Link } from "react-router-dom";
import "../../../css/styles.css";
import React from "react";

const TablaProductoPorMarca = (props) => {
	const { Titulo, Modelo, buscarTermino, handleProductChange } = props;
	const cantidad = Modelo.length;

	// funcion para cambiar un formato DateTime a Date
	// const formatoFecha = (x) => {
	// 	const date = new Date(x);
	// 	return date.toLocaleDateString("es-ES");
	// };
	return (
		<div className="table-container">
			<div className="rojo">
				<p>{Titulo}</p>
				<p>Cantidad de Registros: {cantidad}</p>
			</div>
			<div className="buscar">
				<div>
					<label htmlFor="">Buscar: </label>
					<input
						type="text"
						value={buscarTermino} // buscarTermino
						onChange={handleProductChange} // handleInputChange
						placeholder="Buscar por Marca"
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
									<th className="top-izquierda">Marca</th>
									<th>Producto</th>
									<th>descripción</th>
									<th>Precio</th>
									<th className="top-derecha">URL</th>
								</tr>
							</thead>

							<tbody>
								{Modelo.map((modelo) => {
									return (
										<tr key={modelo.producto}>
											<td>{modelo.marca}</td>
											<td>{modelo.producto}</td>
											<td>{modelo.descripcion}</td>
											<td>
												S/.{" "}
												{new Intl.NumberFormat(
													"en-EN"
												).format(modelo.precio)}
											</td>
											<td>{modelo.url}</td>
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

export default TablaProductoPorMarca;
