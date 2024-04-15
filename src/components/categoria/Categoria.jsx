import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import React, { useState, useEffect } from "react";
import TablaCategoria from "./TablaCategoria";
import Swal from "sweetalert2";
import "../../css/styles.css";
import axios from "axios";

const url = "http://localhost:5277/api/Categoria";

const Categoria = () => {
	const [buscarTermino, setBuscarTermino] = useState("");
	const [data, setData] = useState([]);
	const [modalInsertar, setModalInsertar] = useState(false);
	const [modalEliminar, setModalEliminar] = useState(false);
	const titulo = "Lista de Categorias";
	const [form, setForm] = useState({
		codigoCategoria: "",
		nombre: "",
		activo: true,
		tipoModal: "",
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`${url}/list-Categories`);
				setData(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
				setData([]);
			}
		};

		fetchData();
	}, []);

	const handleInputChange = (event) => {
		setBuscarTermino(event.target.value);
	};

	const handleActivoChange = (event) => {
		const isChecked = event.target.checked;
		setForm((prevForm) => ({
			...prevForm,
			activo: isChecked,
		}));
	};


	const resultadosFiltrados = data.filter((categoria) => {
		const term = buscarTermino.toLowerCase();
		return (
			categoria.codigoCategoria.toLowerCase().includes(term) ||
			categoria.nombre.toLowerCase().includes(term)
		);
	});

	const handleModalInsertar = () => {
		setForm({
			codigoCategoria: "",
			nombre: "",
			activo: "",
			tipoModal: "insertar",
		});
		setModalInsertar(!modalInsertar);
	};

	const handleSeleccionarDato = (categoria) => {
		setForm({
			...categoria,
			tipoModal: "actualizar",
		});
		setModalInsertar(!modalInsertar);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prevForm) => ({
			...prevForm,
			[name]: value,
		}));
	};

	const handlePeticionPost = async () => {
		try {
			await axios.post(`${url}/create-category`, form);
			handleModalInsertar();
			const response = await axios.get(`${url}/list-Categories`);
			setData(response.data);

			// Mostrar mensaje de éxito con SweetAlert2
			Swal.fire({
				title: "Felicidades!!",
				text: "Categoria creada correctamente",
				icon: "success",
				confirmButtonText: "Ok",
			});
		} catch (error) {
			console.log(error.message);
			Swal.fire({
				title: "Error!!",
				text:
					error.response?.data?.error ||
					"Error al crear la categoria",
				icon: "error",
				confirmButtonText: "Ok",
			});
		}
	};

	const handlePeticionPut = async () => {
		try {
			await axios.put(`${url}/update-category`, form);
			handleModalInsertar();
			const response = await axios.get(`${url}/list-Categories`);
			setData(response.data);

			// Mostrar mensaje de éxito con SweetAlert2
			Swal.fire({
				title: "Éxito",
				text: "Categoria actualizada correctamente",
				icon: "success",
				confirmButtonText: "Ok",
			});
		} catch (error) {
			console.log(error.message);

			// Mostrar mensaje de error con SweetAlert2
			Swal.fire({
				title: "Error",
				text:
					error.response?.data?.error ||
					"Error al actualizar la categoria ",
				icon: "error",
				confirmButtonText: "Ok",
			});
		}
	};

	const handlePeticionDelete = async () => {
		try {
			await axios.delete(
				`${url}/delete-category/${form.codigoCategoria}`
			);
			setModalEliminar(false);
			const response = await axios.get(`${url}/list-Categories`);
			setData(response.data);

			// Mostrar mensaje de éxito con SweetAlert2
			Swal.fire({
				title: "Éxito",
				text: "Categoria eliminada correctamente",
				icon: "success",
				confirmButtonText: "Ok",
			});
		} catch (error) {
			console.log(error.message);

			// Mostrar mensaje de error con SweetAlert2
			Swal.fire({
				title: "Error",
				text:
					error.response?.data?.error ||
					"Error al eliminar la categoria",
				icon: "error",
				confirmButtonText: "Ok",
			});
		}
	};

	return (
		<div className="table-container">
			<TablaCategoria
				Titulo={titulo}
				Categorias={resultadosFiltrados}
				buscarTermino={buscarTermino}
				handleInputChange={handleInputChange}
				datoEntrante={handleModalInsertar}
				handleSeleccionarDato={handleSeleccionarDato}
				setModalEliminar={setModalEliminar}
			/>

			<Modal isOpen={modalInsertar}>
				<ModalHeader style={{ display: "block" }}>
					<span
						style={{ float: "right" }}
						onClick={handleModalInsertar}
					>
						x
					</span>
				</ModalHeader>
				<ModalBody>
					<div className="form-group">
						<label htmlFor="codigoCategoria">ID </label>
						<input
							className="form-control"
							type="text"
							name="codigoCategoria"
							id="codigoCategoria"
							onChange={handleChange}
							value={form.codigoCategoria}
							readOnly={form.tipoModal === "actualizar"}
						/>
						<br />
						<label htmlFor="nombre">Nombre</label>
						<input
							className="form-control"
							type="text"
							name="nombre"
							id="nombre"
							onChange={handleChange}
							value={form.nombre}
						/>
						<br />
						<label htmlFor="activo">Activo
						<input
							// className="form-control"
							type="checkbox"
							// name="activo"
							// id="activo"
							// checked={activo}
							onChange={handleActivoChange}
							// onChange={handleChange}
							value={form.activo}
						/>
						</label>
					</div>
				</ModalBody>

				<ModalFooter>
					{form.tipoModal === "insertar" ? (
						<button className="save" onClick={handlePeticionPost}>
							Guardar
						</button>
					) : (
						<button className="update" onClick={handlePeticionPut}>
							Actualizar
						</button>
					)}
					<button className="cancel" onClick={handleModalInsertar}>
						Cancelar
					</button>
				</ModalFooter>
			</Modal>

			<Modal isOpen={modalEliminar}>
				<ModalBody>
					¿Estás seguro que deseas eliminar la categoria {form.nombre}
					?
				</ModalBody>
				<ModalFooter>
					<button className="delete" onClick={handlePeticionDelete}>
						Sí
					</button>
					<button
						className="no"
						onClick={() => setModalEliminar(false)}
					>
						No
					</button>
				</ModalFooter>
			</Modal>
		</div>
	);
};

export default Categoria;
