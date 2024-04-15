
USE tiendavirtual;
GO

-- Definición de tablas...

-- Insertar al menos 10 registros en la tabla cliente
INSERT INTO cliente (codigo_cliente, nombres, apellidos, dni, telefono, correo, direccion, activo)
VALUES 
('CLI00001', 'Jonathan', 'Doe', '12345678', '123456789', 'jon.doe@example.com', 'Calle Principal 123', 1),
('CLI00002', 'Jane', 'Doe', '87654321', '987654321', 'jane.doe@example.com', 'Avenida Central 456', 1),
('CLI00003', 'Peter', 'Max', '13579246', '987654123', 'peter.max@example.com', 'Calle Secundaria 789', 1),
('CLI00004', 'Daniel', 'Johnson', '98765432', '123456789', 'daniel.johnson@example.com', 'Calle Principal 987', 1),
('CLI00005', 'Joseph', 'Doe', '45678912', '987654321', 'joseph.doe@example.com', 'Avenida Principal 753', 1),
('CLI00006', 'Michael', 'Anderson', '98712345', '123456789', 'michael.anderson@example.com', 'Calle de la Rosa 159', 1),
('CLI00007', 'Ann', 'Maxwell', '65432178', '987654321', 'ann.maxwell@example.com', 'Avenida Principal 357', 1),
('CLI00008', 'Samuel', 'Robinson', '32165487', '123456789', 'samuel.robinson@example.com', 'Calle de la Luz 753', 1),
('CLI00009', 'Sarah', 'Martinez', '78965412', '987654321', 'sarah.martinez@example.com', 'Avenida Central 852', 1),
('CLI00010', 'Jennifer', 'Allen', '15935728', '123456789', 'jennifer.allen@example.com', 'Calle del Sol 456', 1);

-- Insertar al menos 10 registros en la tabla pedido
INSERT INTO pedido (codigo_pedido, codigo_cliente, fecha_hora, estado, total)
VALUES 
('PED0001', 'CLI00001', '2024-04-01 08:30:00', 'En proceso', 100.50),
('PED0002', 'CLI00002', '2024-04-02 10:45:00', 'Entregado', 75.25),
('PED0003', 'CLI00003', '2024-04-03 12:15:00', 'En proceso', 120.75),
('PED0004', 'CLI00004', '2024-04-04 14:20:00', 'Entregado', 50.00),
('PED0005', 'CLI00005', '2024-04-05 16:30:00', 'Enviado', 200.00),
('PED0006', 'CLI00006', '2024-04-06 18:45:00', 'En proceso', 80.50),
('PED0007', 'CLI00007', '2024-04-07 20:00:00', 'Enviado', 150.25),
('PED0008', 'CLI00008', '2024-04-08 22:10:00', 'Entregado', 90.75),
('PED0009', 'CLI00009', '2024-04-09 23:45:00', 'En proceso', 110.00),
('PED0010', 'CLI00010' , '2024-04-10 08:00:00', 'Entregado', 160.00);

-- Insertar al menos 10 registros en la tabla marca
INSERT INTO marca (codigo_marca, nombre, activo)
VALUES 
('MAR0001', 'Nike', 1),
('MAR0002', 'Adidas', 1),
('MAR0003', 'Puma', 1),
('MAR0004', 'Reebok', 1),
('MAR0005', 'Vans', 1),
('MAR0006', 'Converse', 1),
('MAR0007', 'New Balance', 1),
('MAR0008', 'Puma', 1),
('MAR0009', 'Levis', 1),
('MAR0010', 'Tommy Hilfiger', 1);

-- Insertar al menos 10 registros en la tabla categoria
INSERT INTO categoria (codigo_categoria, nombre, activo)
VALUES 
('CAT0001', 'Ropa', 1),
('CAT0002', 'Zapatos', 1),
('CAT0003', 'Deportes', 1),
('CAT0004', 'Accesorios', 1),
('CAT0005', 'Electrónicos', 1),
('CAT0006', 'Hogar', 1),
('CAT0007', 'Bebidas', 1),
('CAT0008', 'Alimentos', 1),
('CAT0009', 'Joyería', 1),
('CAT0010', 'Belleza', 1);

-- Insertar al menos 10 registros en la tabla usuario
INSERT INTO usuario (codigo_usuario, nombres, apellidos, dni, correo, contrasena, activo)
VALUES 
('USR0001', 'Jonathan', 'Doe', '12345678', 'jon.doe@example.com', 'Jodo12', 1),
('USR0002', 'Jane', 'Doe', '87654321', 'jane.doe@example.com', 'Jado87', 1),
('USR0003', 'Peter', 'Max', '13579246', 'peter.max@example.com', 'Pema13', 1),
('USR0004', 'Daniel', 'Johnson', '98765432', 'daniel.johnson@example.com', 'Jado98', 1),
('USR0005', 'Joseph', 'Doe', '45678912', 'joseph.doe@example.com', 'Jodo45', 1),
('USR0006', 'Michael', 'Anderson', '98712345', 'michael.anderson@example.com', 'Mian98', 1),
('USR0007', 'Ann', 'Maxwell', '65432178', 'ann.maxwell@example.com', 'Anma65', 1),
('USR0008', 'Samuel', 'Robinson', '32165487', 'samuel.robinson@example.com', 'Saro32', 1),
('USR0009', 'Sarah', 'Martinez', '78965412', 'sarah.martinez@example.com', 'Sama78', 1),
('USR0010', 'Jennifer', 'Allen', '15935728', 'jennifer.allen@example.com', 'Jeal15', 1);

-- Insertar al menos 10 registros en la tabla direccion_envio
INSERT INTO direccion_envio (codigo_direccion, codigo_usuario, direccion)
VALUES 
('DIR0001', 'USR0001', 'Calle Principal 123'),
('DIR0002', 'USR0002', 'Avenida Central 456'),
('DIR0003', 'USR0003', 'Calle Secundaria 789'),
('DIR0004', 'USR0004', 'Calle Principal 987'),
('DIR0005', 'USR0005', 'Avenida Principal 753'),
('DIR0006', 'USR0006', 'Calle de la Rosa 159'),
('DIR0007', 'USR0007', 'Avenida Principal 357'),
('DIR0008', 'USR0008', 'Calle de la Luz 753'),
('DIR0009', 'USR0009', 'Avenida Central 852'),
('DIR0010', 'USR0010', 'Calle del Sol 456');

-- Insertar al menos 10 registros en la tabla producto
INSERT INTO producto (codigo_producto, codigo_categoria, codigo_marca, nombre, descripcion, precio, url, activo)
VALUES 
('PROD0001', 'CAT0001', 'MAR0001', 'Camiseta', 'Camiseta deportiva de algodón', 25.99, 'https://ejemplo.com/camiseta', 1),
('PROD0002', 'CAT0001', 'MAR0001', 'Pantalón', 'Pantalón vaquero ajustado', 39.99, 'https://ejemplo.com/pantalon', 1),
('PROD0003', 'CAT0002', 'MAR0002', 'Zapatillas', 'Zapatillas para correr', 89.99, 'https://ejemplo.com/zapatillas', 1),
('PROD0004', 'CAT0002', 'MAR0002', 'Botas', 'Botas de cuero para senderismo', 129.99, 'https://ejemplo.com/botas', 1),
('PROD0005', 'CAT0003', 'MAR0003', 'Balón de Fútbol', 'Balón oficial de la FIFA', 29.99, 'https://ejemplo.com/balon-futbol', 1),
('PROD0006', 'CAT0003', 'MAR0003', 'Raqueta de Tenis', 'Raqueta profesional de tenis', 159.99, 'https://ejemplo.com/raqueta-tenis', 1),
('PROD0007', 'CAT0004', 'MAR0004', 'Bolsa de Deporte', 'Bolsa de deporte resistente al agua', 49.99, 'https://ejemplo.com/bolsa-deporte', 1),
('PROD0008', 'CAT0004', 'MAR0004', 'Reloj Deportivo', 'Reloj digital con monitor de actividad', 79.99, 'https://ejemplo.com/reloj-deportivo', 1),
('PROD0009', 'CAT0005', 'MAR0005', 'Smartphone', 'Smartphone de última generación', 699.99, 'https://ejemplo.com/smartphone', 1),
('PROD0010', 'CAT0005', 'MAR0005', 'Portátil', 'Portátil ligero y potente', 999.99, 'https://ejemplo.com/portatil', 1);

-- Insertar al menos 10 registros en la tabla carrito_compras
INSERT INTO carrito_compras (codigo_carrito, codigo_usuario, codigo_producto, cantidad)
VALUES 
('CARR0001', 'USR0001', 'PROD0001', 2),
('CARR0002', 'USR0002', 'PROD0003', 1),
('CARR0003', 'USR0003', 'PROD0005', 3),
('CARR0004', 'USR0004', 'PROD0007', 1),
('CARR0005', 'USR0005', 'PROD0009', 2),
('CARR0006', 'USR0006', 'PROD0002', 1),
('CARR0007', 'USR0007', 'PROD0004', 3),
('CARR0008', 'USR0008', 'PROD0006', 1),
('CARR0009', 'USR0009', 'PROD0008', 2),
('CARR0010', 'USR0001', 'PROD0010', 1);

-- Insertar al menos 10 registros en la tabla comentario
INSERT INTO comentario (codigo_comentario, codigo_usuario, codigo_producto, comentario, puntuacion, fecha)
VALUES 
('COM0001', 'USR0001', 'PROD0001', 'Excelente calidad y precio', 5, '2022-04-01 10:30:00'),
('COM0002', 'USR0002', 'PROD0003', 'Muy cómodas, recomendadas', 4, '2023-06-02 11:45:00'),
('COM0003', 'USR0003', 'PROD0005', 'Cumple con las expectativas', 3, '2023-08-08 13:15:00'),
('COM0004', 'USR0004', 'PROD0007', 'Me encanta, la uso todos los días', 5, '2024-01-02 15:20:00'),
('COM0005', 'USR0005', 'PROD0009', 'Funciona perfectamente, buen precio', 4, '2023-12-06 17:30:00'),
('COM0006', 'USR0006', 'PROD0002', 'Gran calidad, muy resistente', 5, '2023-10-06 19:45:00'),
('COM0007', 'USR0007', 'PROD0004', 'Buena relación calidad-precio', 4, '2023-09-07 21:00:00'),
('COM0008', 'USR0008', 'PROD0006', 'Me ha sorprendido gratamente, muy recomendable', 5, '2022-04-08 23:10:00'),
('COM0009', 'USR0009', 'PROD0008', 'Exactamente lo que buscaba, muy contenta', 5, '2023-02-09 00:45:00'),
('COM0010', 'USR0010', 'PROD0010', 'Producto de calidad, entrega rápida', 4, '2023-06-10 09:00:00');

-- Insertar al menos 10 registros en la tabla pedido_detalle
INSERT INTO pedido_detalle (codigo_pedido_detalle, codigo_pedido, codigo_producto, cantidad, precio_unitario, sub_total, igv, neto)
VALUES 
('DETPED0001', 'PED0001', 'PROD0001', 2, 25.99, 51.98, 9.18, 61.33),
('DETPED0002', 'PED0002', 'PROD0003', 1, 89.99, 89.99, 16.19, 106.18),
('DETPED0003', 'PED0003', 'PROD0005', 3, 29.99, 89.97, 19.19, 105.22),
('DETPED0004', 'PED0004', 'PROD0007', 1, 49.99, 49.99, 8.99, 58.98),
('DETPED0005', 'PED0005', 'PROD0009', 2, 699.99, 1399.98, 251.99, 1651.97),
('DETPED0006', 'PED0006', 'PROD0002', 1, 39.99, 39.99, 7.19, 47.18),
('DETPED0007', 'PED0007', 'PROD0004', 3, 129.99, 389.97, 70.19, 460.16),
('DETPED0008', 'PED0008', 'PROD0006', 1, 159.99, 159.99, 28.79, 188.78),
('DETPED0009', 'PED0009', 'PROD0008', 2, 79.99, 159.98, 28.79, 188.78),
('DETPED0010', 'PED0010', 'PROD0010', 1, 999.99, 999.99, 179.99, 1179.98);
