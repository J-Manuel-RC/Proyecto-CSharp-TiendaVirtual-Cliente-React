import React, { useState, useEffect } from "react";
import TablaProductoPorMarca from "./TablaProductoPorMarca";
import "../../../css/styles.css";
import axios from "axios";

const ProductoPorMarca = () => {
	const [buscarTermino, setBuscarTermino] = useState("");
	const [data, setData] = useState([]);
	const titulo = "Productos por Marca";

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`http://localhost:5277/api/Consultas/getProducto_por_marca`
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

	const resultadosFiltrados = data.filter((producto) => {
		const term = buscarTermino.toLowerCase();
		return producto.marca.toLowerCase().includes(term);
	});

	return (
		<div className="table-container">
			<TablaProductoPorMarca
				Titulo={titulo}
				Modelo={resultadosFiltrados}
				buscarTermino={buscarTermino}
				handleProductChange={handleProductChange}
			/>
		</div>
	);
};

export default ProductoPorMarca;
