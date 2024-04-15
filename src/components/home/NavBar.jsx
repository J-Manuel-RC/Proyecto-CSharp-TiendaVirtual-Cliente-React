import { NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import "./HmeNavSide.css";

const NavBar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg upper">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						Home
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarNavDropdown"
					>
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link" to="/productos">
									Productos
								</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link" to="/categorias">
									Categorias
								</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link" to="/pedidos">
									Pedidos
								</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link" to="/detalles">
									Detalles
								</Link>
							</li>

							<NavDropdown
								title="Consultas"
								id="basic-nav-dropdown"
							>
								<NavDropdown.Item
									as={Link}
									to="/producto-por-marca"
								>
									Producto por marca
								</NavDropdown.Item>
								<NavDropdown.Item
									as={Link}
									to="/comentario-por-producto"
								>
									Comentario por producto
								</NavDropdown.Item>
								<NavDropdown.Item
									as={Link}
									to="/comentario-por-usuario"
								>
									Comentario por usuario
								</NavDropdown.Item>
								<NavDropdown.Item
									as={Link}
									to="/comentario-por-puntuacion"
								>
									Comentario por puntuación
								</NavDropdown.Item>
							</NavDropdown>
							{/* <li className="nav-item dropdown">
								<Link
									className="nav-link dropdown-toggle"
									// to="/pedidos"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Consultas
								</Link>

								<ul className="dropdown-menu">
									<li>
										<Link
											className="dropdown-item"
											to="/producto-por-marca"
										>
											Producto por marca
										</Link>
									</li>

									<li>
										<Link
											className="dropdown-item"
											to="/comentario-por-producto"
										>
											Comentario por producto
										</Link>
									</li>

									<li>
										<Link
											className="dropdown-item"
											to="/comentario-por-usuario"
										>
											Comentario por usuario
										</Link>
									</li>

									<li>
										<Link
											className="dropdown-item"
											to="/comentario-por-puntuacion"
										>
											Commentario por puntuacion
										</Link>
									</li>
								</ul>
							</li> */}
						</ul>
					</div>
				</div>
			</nav>
			<Outlet />
		</div>
	);
};

export default NavBar;
