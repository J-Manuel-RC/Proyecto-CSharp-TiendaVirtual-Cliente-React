import CommentarioPorPuntuacion from './components/consultas/comentaroPorPuntuacion/ComentarioPorPuntuacion';
import CommentarioPorProducto from './components/consultas/comentarioProducto/ComentarioPorProducto';
import CommentarioPorUsuario from './components/consultas/comentarioUsuario/ComentarioPorUsuario';
import ProductoPorMarca from './components/consultas/productoPorMarca/ProductoPorMarca';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PedidoDetalle from './components/pedido-detalle/PedidoDetalle';
import Categoria from './components/categoria/Categoria';
import Producto from './components/producto/Producto';
// import NotFound from './components/404/NotFound';
import Pedido from './components/pedido/Pedido';
import Home from './components/home/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import NavBar from './components/home/NavBar';

function App() {
  return (
    <div className='root'>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="productos" element={<Producto />} />
          <Route path="categorias" element={<Categoria />} />
          <Route path="pedidos" element={<Pedido />} />
          <Route path="detalles" element={<PedidoDetalle />} />
          <Route path="producto-por-marca" element={<ProductoPorMarca />} />
          <Route path="comentario-por-producto" element={<CommentarioPorProducto />} />
          <Route path="comentario-por-usuario" element={<CommentarioPorUsuario />} />
          <Route path="comentario-por-puntuacion" element={<CommentarioPorPuntuacion />} />
        </Routes>
      </Router>

    </div>

  );
}

export default App;
