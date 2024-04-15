// import React from 'react';
// import {
// 	CSidebar,
// 	CSidebarBrand,
// 	cilSpeedometer,
// 	CSidebarNav,
// 	CNavTitle,
// 	CNavItem,
// 	CIcon,
// 	CNavGroup,
// 	CSidebarToggler,
// 	cilPuzzle,
// 	CBadge,
// 	CSidebarHeader,
// 	cilCloudDownload,
// 	cilLayers,
// } from "@coreui/react";

// const SideBar = () => {
//     return (
// 		<div>
// 			<CSidebar className="border-end">
// 				<CSidebarHeader className="border-bottom">
// 					<CSidebarBrand>CoreUI</CSidebarBrand>
// 				</CSidebarHeader>
// 				<CSidebarNav>
// 					<CNavTitle>Tinda Virtual</CNavTitle>
// 					<CNavItem href="/src/components/pedido/Pedido.jsx">
// 						<CIcon
// 							customClassName="nav-icon"
// 							icon={cilSpeedometer}
// 						/>{" "}
// 						Pedidos
// 					</CNavItem>
// 					<CNavItem href="/src/components/producto/Producto.jsx">
// 						<CIcon
// 							customClassName="nav-icon"
// 							icon={cilSpeedometer}
// 						/>{" "}
// 						Productos <CBadge color="primary ms-auto">NEW</CBadge>
// 					</CNavItem>
// 					<CNavGroup
// 						toggler={
// 							<>
// 								<CIcon
// 									customClassName="nav-icon"
// 									icon={cilPuzzle}
// 								/>{" "}
// 								Nav dropdown
// 							</>
// 						}
// 					>
// 						<CNavItem href="#">
// 							<span className="nav-icon">
// 								<span className="nav-icon-bullet"></span>
// 							</span>{" "}
// 							Nav dropdown item
// 						</CNavItem>
// 						<CNavItem href="#">
// 							<span className="nav-icon">
// 								<span className="nav-icon-bullet"></span>
// 							</span>{" "}
// 							Nav dropdown item
// 						</CNavItem>
// 					</CNavGroup>
// 					<CNavItem href="https://coreui.io">
// 						<CIcon
// 							customClassName="nav-icon"
// 							icon={cilCloudDownload}
// 						/>{" "}
// 						Download CoreUI
// 					</CNavItem>
// 					<CNavItem href="https://coreui.io/pro/">
// 						<CIcon customClassName="nav-icon" icon={cilLayers} />{" "}
// 						Try CoreUI PRO
// 					</CNavItem>
// 				</CSidebarNav>
// 				<CSidebarHeader className="border-top">
// 					<CSidebarToggler />
// 				</CSidebarHeader>
// 			</CSidebar>
// 		</div>
// 	);
// };

// export default SideBar;