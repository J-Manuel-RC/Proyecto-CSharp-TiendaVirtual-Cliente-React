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

CREATE OR ALTER PROCEDURE sp_comentario_por_producto

AS
BEGIN
	SET NOCOUNT ON;

	SELECT p.nombre AS producto,
			p.descripcion, 
			c.comentario,
			CONVERT(DATE, c.fecha) AS fecha,
			c.puntuacion
	FROM comentario c
	INNER JOIN producto p ON c.codigo_producto = p.codigo_producto
	WHERE c.codigo_producto = p.codigo_producto
END
GO

EXEC sp_comentario_por_producto
GO