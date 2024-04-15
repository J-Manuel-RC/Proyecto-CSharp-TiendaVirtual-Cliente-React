import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import React, { useState, useEffect } from "react";
import TablaPedido from "./TablaPedido";
import Swal from "sweetalert2";
import "../../css/styles.css";
import axios from "axios";

const url = "http://localhost:5277/api/Pedido";

const Pedido = () => {
	const [buscarTermino, setBuscarTermino] = useState("");
	const [data, setData] = useState([]);
	const [modalInsertar, setModalInsertar] = useState(false);
	const [modalEliminar, setModalEliminar] = useState(false);
	const titulo = "Lista de Pedidos";
	const [form, setForm] = useState({
		codigoPedido: "",
		codigoCliente: "",
		fechaHora: "",
		estado: "",
		total: 0,
		tipoModal: "",
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`${url}/list-orders`);
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

	const resultadosFiltrados = data.filter((pedido) => {
		const term = buscarTermino.toLowerCase();
		return (
			pedido.codigoPedido.toLowerCase().includes(term) ||
			pedido.codigoCliente.toLowerCase().includes(term) ||
			pedido.estado.toLowerCase().includes(term)
		);
	});

	const handleModalInsertar = () => {
		setForm({
			codigoPedido: "",
			codigoCliente: "",
			fechaHora: "",
			estado: "",
			total: 0,
			tipoModal: "insertar",
		});
		setModalInsertar(!modalInsertar);
	};

	const handleSeleccionarPedido = (pedido) => {
		setForm({
			...pedido,
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
			await axios.post(`${url}/create-order`, form);
			handleModalInsertar();
			const response = await axios.get(`${url}/list-orders`);
			setData(response.data);

			// Mostrar mensaje de éxito con SweetAlert2
			Swal.fire({
				title: "Felicidades!!",
				text: "Pedido creado correctamente",
				icon: "success",
				confirmButtonText: "Ok",
			});
			
		} catch (error) {
			console.log(error.message);

			Swal.fire({
				title: "Error!!",
				text:
					error.response?.data?.error || "Error al crear el pedido",
				icon: "error",
				confirmButtonText: "Ok",
			});
		}
	};

	const handlePeticionPut = async () => {
		try {
			await axios.put(`${url}/update-order`, form);
			handleModalInsertar();
			const response = await axios.get(`${url}/list-orders`);
			setData(response.data);

			// Mostrar mensaje de éxito con SweetAlert2
			Swal.fire({
				title: "Éxito",
				text: "Pedido actualizado correctamente",
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
					"Error al actualizar el pedido",
				icon: "error",
				confirmButtonText: "Ok",
			});
		}
	};

	const handlePeticionDelete = async () => {
		try {
			await axios.delete(`${url}/delete-order/${form.codigoPedido}`);
			setModalEliminar(false);
			const response = await axios.get(`${url}/list-orders`);
			setData(response.data);

			// Mostrar mensaje de éxito con SweetAlert2
			Swal.fire({
				title: "Éxito",
				text: "Pedido eliminado correctamente",
				icon: "success",
				confirmButtonText: "Ok",
			});
			// Cerrar el modal de inserción (si es necesario)
			// handleModalInsertar();
		} catch (error) {
			console.log(error.message);

			// Mostrar mensaje de error con SweetAlert2
			Swal.fire({
				title: "Error",
				text:
					error.response?.data?.error ||
					"Error al eliminar el pedido",
				icon: "error",
				confirmButtonText: "Ok",
			});
		}
	};

	return (
		<div className="">
			
			<TablaPedido
				Titulo={titulo}
				Pedido={resultadosFiltrados}
				buscarTermino={buscarTermino}
				handleInputChange={handleInputChange}
				datoEntrante={handleModalInsertar}
				handleSeleccionarPedido={handleSeleccionarPedido}
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
						<label htmlFor="codigoPedido">ID</label>
						<input
							className="form-control"
							type="text"
							name="codigoPedido"
							id="codigoPedido"
							onChange={handleChange}
							value={form.codigoPedido}
							readOnly={form.tipoModal === "actualizar"}
						/>
						<br />
						<label htmlFor="codigoCliente">Código Cliente</label>
						<input
							className="form-control"
							type="text"
							name="codigoCliente"
							id="codigoCliente"
							onChange={handleChange}
							value={form.codigoCliente}
						/>
						<br />
						<label htmlFor="fechaHora">Fecha</label>
						<input
							className="form-control"
							type="date"
							name="fechaHora"
							id="fechaHora"
							onChange={handleChange}
							value={form.fechaHora}
						/>
						<br />
						<label htmlFor="estado">Estado</label>
						<input
							className="form-control"
							type="text"
							name="estado"
							id="estado"
							onChange={handleChange}
							value={form.estado}
						/>
						<br />
						<label htmlFor="total">Total</label>
						<input
							className="form-control"
							type="number"
							name="total"
							id="total"
							onChange={handleChange}
							value={form.total}
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
					¿Estás seguro que deseas eliminar el pedido{" "}
					{form.codigoPedido}?
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

export default Pedido;
