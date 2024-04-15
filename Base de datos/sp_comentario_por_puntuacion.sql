-- ================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================

CREATE OR ALTER PROCEDURE sp_comentario_por_puntuacion

AS
BEGIN
	SET NOCOUNT ON;

	SELECT CONCAT(u.nombres,' ', u.apellidos) AS usuario,
			p.nombre AS producto,
			p.descripcion,
			c.comentario,
			c.puntuacion
			
	FROM comentario c
	INNER JOIN producto p ON c.codigo_producto = p.codigo_producto
	INNER JOIN usuario u ON c.codigo_usuario = u.codigo_usuario
	WHERE c.codigo_producto = p.codigo_producto
	AND c.codigo_usuario = u.codigo_usuario
END
GO

EXEC sp_comentario_por_puntuacion
GO