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

CREATE OR ALTER PROCEDURE sp_producto_por_marca

AS
BEGIN
	SET NOCOUNT ON;

	SELECT  m.nombre AS marca,
			p.nombre AS producto,
			p.descripcion, 
			p.precio,
			p.url
	FROM producto p
	INNER JOIN marca m ON p.codigo_marca = m.codigo_marca
END
GO

EXEC sp_producto_por_marca
GO