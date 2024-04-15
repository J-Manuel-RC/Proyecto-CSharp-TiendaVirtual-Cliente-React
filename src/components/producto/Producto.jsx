import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import React, { useState, useEffect } from "react";
import ProductosTable from "./TablaProducto";
import "../../css/styles.css";
import Swal from "sweetalert2";
import axios from "axios";

const url = "http://localhost:5277/api/Producto";

const Producto = () => {
	const [buscarTermino, setBuscarTermino] = useState("");
	const [data, setData] = useState([]);
	const [modalInsertar, setModalInsertar] = useState(false);
	const [modalEliminar, setModalEliminar] = useState(false);
	const titulo = "Lista de Productos";
	const [form, setForm] = useState({
		codigoProducto: "",
		codigoMarca: "",
		nombre: "",
		descripcion: "",
		precio: 0,
		url: "",
		tipoModal: "",
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`${url}/list-products`);
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

	const resultadosFiltrados = data.filter((producto) => {
		const term = buscarTermino.toLowerCase();
		return (
			producto.codigoProducto.toLowerCase().includes(term) ||
			producto.nombre.toLowerCase().includes(term) ||
			producto.descripcion.toLowerCase().includes(term) ||
			producto.precio.toString().includes(term)
		);
	});

	const handleModalInsertar = () => {
		setForm({
			codigoProducto: "",
			codigoMarca: "",
			nombre: "",
			descripcion: "",
			precio: 0,
			url: "",
			tipoModal: "insertar",
		});
		setModalInsertar(!modalInsertar);
	};

	const handleSeleccionarProducto = (producto) => {
		setForm({
			...producto,
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
			await axios.post(`${url}/create-product`, form);
			handleModalInsertar();
			const response = await axios.get(`${url}/list-products`);
			setData(response.data);

			// Mostrar mensaje de éxito con SweetAlert2
			Swal.fire({
				title: "Felicidades!!",
				text: "Producto creado correctamente",
				icon: "success",
				confirmButtonText: "Ok",
			});
		} catch (error) {
			console.log(error.message);
			Swal.fire({
				title: "Error!!",
				text:
					error.response?.data?.error || "Error al crear el producto",
				icon: "error",
				confirmButtonText: "Ok",
			});
		}
	};

	const handlePeticionPut = async () => {
		try {
			await axios.put(`${url}/update-product`, form);
			handleModalInsertar();
			const response = await axios.get(`${url}/list-products`);
			setData(response.data);

			// Mostrar mensaje de éxito con SweetAlert2
			Swal.fire({
				title: "Éxito",
				text: "Producto actualizado correctamente",
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
					"Error al actualizar el producto",
				icon: "error",
				confirmButtonText: "Ok",
			});
		}
	};

	const handlePeticionDelete = async () => {
		try {
			await axios.delete(`${url}/delete-product/${form.codigoProducto}`);
			setModalEliminar(false);
			const response = await axios.get(`${url}/list-products`);
			setData(response.data);

			// Mostrar mensaje de éxito con SweetAlert2
			Swal.fire({
				title: "Éxito",
				text: "Producto eliminado correctamente",
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
					"Error al eliminar el producto",
				icon: "error",
				confirmButtonText: "Ok",
			});
		}
	};

	return (
		<div className="table-container">
			
			<ProductosTable
				Titulo={titulo}
				Productos={resultadosFiltrados}
				buscarTermino={buscarTermino}
				handleInputChange={handleInputChange}
				datoEntrante={handleModalInsertar}
				handleSeleccionarProducto={handleSeleccionarProducto}
				setModalEliminar={setModalEliminar}
			/>

			<Modal isOpen={modalInsertar}>
				<ModalHeader style={{ display: "block" }}>
					<span
						style={{ float: "right" }}
						onClick={handleModalInsertar}
					>
						❌
					</span>
				</ModalHeader>
				<ModalBody>
					<div className="form-group">
						<label htmlFor="codigoProducto">ID</label>
						<input
							className="form-control"
							type="text"
							name="codigoProducto"
							id="codigoProducto"
							onChange={handleChange}
							value={form.codigoProducto}
							readOnly={form.tipoModal === "actualizar"}
						/>
						<br />
						<label htmlFor="codigoMarca">Código Marca</label>
						<input
							className="form-control"
							type="text"
							name="codigoMarca"
							id="codigoMarca"
							onChange={handleChange}
							value={form.codigoMarca}
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
						<label htmlFor="descripcion">Descripción</label>
						<input
							className="form-control"
							type="text"
							name="descripcion"
							id="descripcion"
							onChange={handleChange}
							value={form.descripcion}
						/>
						<br />
						<label htmlFor="precio">Precio</label>
						<input
							className="form-control"
							type="number"
							name="precio"
							id="precio"
							onChange={handleChange}
							value={form.precio}
						/>
						<br />
						<label htmlFor="url">URL</label>
						<input
							className="form-control"
							type="text"
							name="url"
							id="url"
							onChange={handleChange}
							value={form.url}
						/>
					</div>
				</ModalBody>

				<ModalFooter>
					{form.tipoModal === "insertar" ? (
						<button
							className="save"
							onClick={handlePeticionPost}
						>
							Guardar
						</button>
					) : (
						<button
							className="update"
							onClick={handlePeticionPut}
						>
							Actualizar
						</button>
					)}
					<button
						className="cancel"
						onClick={handleModalInsertar}
					>
						Cancelar
					</button>
				</ModalFooter>
			</Modal>

			<Modal isOpen={modalEliminar}>
				<ModalBody>
					¿Estás seguro que deseas eliminar el producto {form.nombre}?
				</ModalBody>
				<ModalFooter>
					<button
						className="delete"
						onClick={handlePeticionDelete}
					>
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

export default Producto;
