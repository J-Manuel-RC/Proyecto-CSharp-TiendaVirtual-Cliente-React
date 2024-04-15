import React from "react";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Button,
} from "@nextui-org/react";

const Boton = () => {
	return (
		<div>
			<Dropdown>
				<DropdownTrigger>
					<Button className="boton">

					</Button>
				</DropdownTrigger>
				<DropdownMenu
				>
					<DropdownItem key="new">New file</DropdownItem>
					<DropdownItem key="copy">Copy link</DropdownItem>
					<DropdownItem key="edit">Edit file</DropdownItem>
					<DropdownItem
						key="delete"
						className="text-danger"
						color="danger"
					>
						Delete file
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</div>
	);
};

export default Boton;
