import React from "react";

const Header = () => {
  return (
    <header style={{ backgroundColor: '#f2f2f2', borderTop: '5px solid #ff0000' }}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Compras finas</h1>
          </div>
          <div className="col">
            <nav>
              <ul className="d-flex justify-content-end">
                <button type="button" class="btn btn-outline-primary">Productos</button>
                <button type="button" class="btn btn-outline-success">Marcas</button>
                <button type="button" class="btn btn-outline-warning">Accesorios</button>
                <button type="button" class="btn btn-outline-info">Más</button>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;