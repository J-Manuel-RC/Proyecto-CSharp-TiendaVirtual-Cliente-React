import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import React, { useState, useEffect } from "react";
import TablaPedidoDetalle from "./TablaPedidoDetalle";
import "../../css/styles.css";
import Swal from "sweetalert2";
import axios from "axios";

const url = "http://localhost:5277/api/PedidoDetalle";

const PedidoDetalle = () => {
	const [buscarTermino, setBuscarTermino] = useState("");
	const [data, setData] = useState([]);
	const [modalInsertar, setModalInsertar] = useState(false);
	const [modalEliminar, setModalEliminar] = useState(false);
	const titulo = "Lista de Detalles";
	const [form, setForm] = useState({
		codigoPedidoDetalle: "",
		codigoPedido: "",
		codigoProducto: "",
		cantidad: 0,
		precioUnitario: 0.0,
		tipoModal: "",
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`${url}/list-details`);
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

	const resultadosFiltrados = data.filter((pedDet) => {
		const term = buscarTermino.toLowerCase();
		return (
			pedDet.codigoPedidoDetalle.toLowerCase().includes(term)
		);
	});

	const handleModalInsertar = () => {
		setForm({
			codigoPedidoDetalle: "",
			codigoPedido: "",
			codigoProducto: "",
			cantidad: 0,
			precioUnitario: 0.0,
			tipoModal: "insertar",
		});
		setModalInsertar(!modalInsertar);
	};

	const handleSeleccionarProducto = (pedDet) => {
		setForm({
			...pedDet,
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
			await axios.post(`${url}/create-detail`, form);
			handleModalInsertar();
			const response = await axios.get(`${url}/list-details`);
			setData(response.data);

			// Mostrar mensaje de éxito con SweetAlert2
			Swal.fire({
				title: "Felicidades!!",
				text: "Pedido detalle creado correctamente",
				icon: "success",
				confirmButtonText: "Ok",
			});
		} catch (error) {
			console.log(error.message);
			Swal.fire({
				title: "Error!!",
				text:
					error.response?.data?.error ||
					"Error al crear el Pedido detalle",
				icon: "error",
				confirmButtonText: "Ok",
			});
		}
	};

	const handlePeticionPut = async () => {
		try {
			await axios.put(`${url}/update-detail`, form);
			handleModalInsertar();
			const response = await axios.get(`${url}/list-details`);
			setData(response.data);

			// Mostrar mensaje de éxito con SweetAlert2
			Swal.fire({
				title: "Éxito",
				text: "Pedido detalle actualizado correctamente",
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
					"Error al actualizar el Pedido detalle",
				icon: "error",
				confirmButtonText: "Ok",
			});
		}
	};

	const handlePeticionDelete = async () => {
		try {
			await axios.delete(
				`${url}/delete-detail/${form.codigoPedidoDetalle}`
			);
			setModalEliminar(false);
			const response = await axios.get(`${url}/list-details`);
			setData(response.data);

			// Mostrar mensaje de éxito con SweetAlert2
			Swal.fire({
				title: "Éxito",
				text: "Pedido detalle eliminado correctamente",
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
					"Error al eliminar el Pedido detalle",
				icon: "error",
				confirmButtonText: "Ok",
			});
		}
	};

	return (
		<div className="table-container">
			<TablaPedidoDetalle
				Titulo={titulo}
				PedidoDetalle={resultadosFiltrados}
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
						<label htmlFor="codigoPedidoDetalle">ID</label>
						<input
							className="form-control"
							type="text"
							name="codigoPedidoDetalle"
							id="codigoPedidoDetalle"
							onChange={handleChange}
							value={form.codigoPedidoDetalle}
							readOnly={form.tipoModal === "actualizar"}
						/>
						<br />
						<label htmlFor="codigoPedido">Código Pedido</label>
						<input
							className="form-control"
							type="text"
							name="codigoPedido"
							id="codigoPedido"
							onChange={handleChange}
							value={form.codigoPedido}
						/>
						<br />
						<label htmlFor="codigoProducto">Codigo Producto</label>
						<input
							className="form-control"
							type="text"
							name="codigoProducto"
							id="codigoProducto"
							onChange={handleChange}
							value={form.codigoProducto}
						/>
						<br />
						<label htmlFor="cantidad">Cantidad</label>
						<input
							className="form-control"
							type="number"
							name="cantidad"
							id="cantidad"
							onChange={handleChange}
							value={form.cantidad}
						/>
						<br />
						<label htmlFor="precioUnitario">P. Unitario</label>
						<input
							className="form-control"
							type="number"
							name="precioUnitario"
							id="precioUnitario"
							onChange={handleChange}
							value={form.precioUnitario}
						/>
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
					¿Estás seguro que deseas eliminar el Pedido Detalle{" "}
					{form.codigoPedidoDetalle}?
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

export default PedidoDetalle;
