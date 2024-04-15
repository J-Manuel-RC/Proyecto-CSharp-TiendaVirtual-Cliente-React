import TablaComentarioPorPuntuacion from "./TablaComentarioPorPuntuacion";
import React, { useState, useEffect } from "react";
import "../../../css/styles.css";
import axios from "axios";

const CommentarioPorPuntuacion = () => {
	const [buscarTermino, setBuscarTermino] = useState("");
	const [data, setData] = useState([]);
	const titulo = "Comentarios por Puntuación";

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`http://localhost:5277/api/Consultas/GetComentario_por_puntuacion`
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
		// Verificar si comentario.puntuacion es una cadena antes de llamar toLowerCase()
		const puntuacion =
			comentario.puntuacion && comentario.puntuacion.toString();
		return puntuacion && puntuacion.toLowerCase().includes(term);
	});

	return (
		<div className="table-container">
			<TablaComentarioPorPuntuacion
				Titulo={titulo}
				Modelo={resultadosFiltrados}
				buscarTermino={buscarTermino}
				handleProductChange={handleProductChange}
			/>
		</div>
	);
};

export default CommentarioPorPuntuacion;
