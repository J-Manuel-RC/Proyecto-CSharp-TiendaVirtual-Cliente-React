import React, { useState, useEffect } from "react";
import TablaCPU from "./TablaComentarioPorUsuario";
// import { Link } from "react-router-dom";
import "../../../css/styles.css";
import axios from "axios";

const CommentarioPorUsuario = () => {
	const [buscarTermino, setBuscarTermino] = useState("");
	const [data, setData] = useState([]);
	const titulo = "Comentarios por Usuario";

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`http://localhost:5277/api/Consultas/GetComentario_por_usuario`
				);
				setData(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
				setData([]);
			}
		};

		fetchData();
	}, []); 

	const handleProductChange = (event) => {
		setBuscarTermino(event.target.value);
	};

	const resultadosFiltrados = data.filter((comentario) => {
		const term = buscarTermino.toLowerCase();
		return comentario.usuario.toLowerCase().includes(term);
	});

	return (
		<div className="table-container">
			{/* <Link to="/" className="btn btn-danger">
				Regresar
			</Link> */}
			<TablaCPU
				Titulo={titulo}
				Modelo={resultadosFiltrados}
				buscarTermino={buscarTermino}
				handleProductChange={handleProductChange}
			/>
		</div>
	);
};

export default CommentarioPorUsuario;
