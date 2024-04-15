USE master;
GO

IF DB_ID(N'tiendavirtual') IS NULL
BEGIN
    CREATE DATABASE tiendavirtual;
END
GO

USE tiendavirtual;
GO

CREATE TABLE cliente (
  codigo_cliente VARCHAR(20) PRIMARY KEY NOT NULL,
  nombres VARCHAR(100) NOT NULL,
  apellidos VARCHAR(100) NOT NULL,
  dni VARCHAR(8) UNIQUE NOT NULL,
  telefono VARCHAR(50),
  correo VARCHAR(50) UNIQUE NOT NULL,
  direccion TEXT,
  activo BIT,
);

CREATE TABLE pedido (
  codigo_pedido VARCHAR(20) PRIMARY KEY NOT NULL,
  codigo_cliente VARCHAR(20),
  fecha_hora DATETIME NOT NULL,
  estado VARCHAR(50) NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  CONSTRAINT fk_pedido_cliente FOREIGN KEY (codigo_cliente) REFERENCES cliente (codigo_cliente)
);

CREATE TABLE marca (
  codigo_marca VARCHAR(20) PRIMARY KEY NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  activo BIT
);

CREATE TABLE categoria (
  codigo_categoria VARCHAR(20) PRIMARY KEY NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  activo BIT
);

CREATE TABLE usuario (
  codigo_usuario VARCHAR(20) PRIMARY KEY NOT NULL,
  nombres VARCHAR(50) NOT NULL,
  apellidos VARCHAR(50) NOT NULL,
  dni VARCHAR(8) UNIQUE NOT NULL,
  correo VARCHAR(50) UNIQUE NOT NULL,
  contrasena VARCHAR(100) NOT NULL,
  activo BIT
);

CREATE TABLE direccion_envio (
  codigo_direccion VARCHAR(20) PRIMARY KEY NOT NULL,
  codigo_usuario VARCHAR(20),
  direccion VARCHAR(255) NOT NULL,
  CONSTRAINT fk_direccion_envio_usuario FOREIGN KEY (codigo_usuario) REFERENCES usuario (codigo_usuario)
);

CREATE TABLE producto (
  codigo_producto VARCHAR(20) PRIMARY KEY NOT NULL,
  codigo_categoria VARCHAR(20),
  codigo_marca VARCHAR(20),
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  precio DECIMAL(10,2) NOT NULL,
  url TEXT,
  activo BIT,
  CONSTRAINT fk_producto_categoria FOREIGN KEY (codigo_categoria) REFERENCES categoria (codigo_categoria),
  CONSTRAINT fk_producto_marca FOREIGN KEY (codigo_marca) REFERENCES marca (codigo_marca)
);

CREATE TABLE carrito_compras (
  codigo_carrito VARCHAR(20) PRIMARY KEY NOT NULL,
  codigo_usuario VARCHAR(20),
  codigo_producto VARCHAR(20),
  cantidad INT NOT NULL,
  CONSTRAINT fk_carrito_usuario FOREIGN KEY (codigo_usuario) REFERENCES usuario (codigo_usuario),
  CONSTRAINT fk_carrito_producto FOREIGN KEY (codigo_producto) REFERENCES producto (codigo_producto)
);

CREATE TABLE comentario (
  codigo_comentario VARCHAR(20) PRIMARY KEY NOT NULL,
  codigo_usuario VARCHAR(20),
  codigo_producto VARCHAR(20),
  comentario TEXT,
  puntuacion INT,
  fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_comentario_usuario FOREIGN KEY (codigo_usuario) REFERENCES usuario (codigo_usuario),
  CONSTRAINT fk_comentario_producto FOREIGN KEY (codigo_producto) REFERENCES producto (codigo_producto)
);

CREATE TABLE pedido_detalle (
  codigo_pedido_detalle VARCHAR(20) PRIMARY KEY NOT NULL,
  codigo_pedido VARCHAR(20),
  codigo_producto VARCHAR(20),
  cantidad INT NOT NULL,
  precio_unitario DECIMAL(10,2) NOT NULL,
  sub_total DECIMAL(10,2) NOT NULL,
  igv DECIMAL(10,2) NOT NULL,
  neto DECIMAL(10,2) NOT NULL,
  CONSTRAINT fk_pedido_detalle_pedido FOREIGN KEY (codigo_pedido) REFERENCES pedido (codigo_pedido),
  CONSTRAINT fk_pedido_detalle_producto FOREIGN KEY (codigo_producto) REFERENCES producto (codigo_producto)
);
