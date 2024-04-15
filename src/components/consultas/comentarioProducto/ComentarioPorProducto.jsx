import TablaCPP from "./TablaComentarioPorProducto";
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "../../../css/styles.css";
import axios from "axios";

const CommentarioPorProducto = () => {
	const [buscarTermino, setBuscarTermino] = useState("");
	const [data, setData] = useState([]);
	const titulo = "Comentario por Producto";

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`http://localhost:5277/api/Consultas/GetComentario_por_producto`
				);
				setData(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
				setData([]);
			}
		};

		fetchData();
	}, []); // Ejecutar cada vez que 'form.producto' cambie

	const handleProductChange = (event) => {
		setBuscarTermino(event.target.value);
	};


	const resultadosFiltrados = data.filter((comnetario) => {
		const term = buscarTermino.toLowerCase();
		return comnetario.producto.toLowerCase().includes(term);
	});

	return (
		<div className="table-container">
			{/* <Link to="/" className="btn btn-danger">
				Regresar
			</Link> */}
			<TablaCPP
				Titulo={titulo}
				Modelo={resultadosFiltrados}
				buscarTermino={buscarTermino}
				handleProductChange={handleProductChange}
			/>
		</div>
	);
};

export default CommentarioPorProducto;
