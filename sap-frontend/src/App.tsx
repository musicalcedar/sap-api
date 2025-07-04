import React, { useEffect, useState } from "react";
import "./App.css";

type Item = {
  code: string;
  name: string;
  brand: number | null;
  price: number | null;
  stockByWarehouse: { warehouse: string; stock: number }[];
};

const PAGE_SIZE = 20;

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Opcional: Si implementas el endpoint /sap/items/count
  // const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(
      `http://localhost:3000/api/v1/sap/items?top=${PAGE_SIZE}&skip=${
        (page - 1) * PAGE_SIZE
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error cargando productos");
        setLoading(false);
      });
  }, [page]);

  return (
    <div className="container">
      <h1>Catálogo de Productos SAP</h1>
      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Precio</th>
            <th>Stock por bodega</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.code}>
              <td>{item.code}</td>
              <td>{item.name}</td>
              <td>{item.brand ?? "-"}</td>
              <td>{item.price ?? "-"}</td>
              <td>
                {item.stockByWarehouse.map((wh) => (
                  <span key={wh.warehouse}>
                    {wh.warehouse}: {wh.stock}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Anterior
        </button>
        <span style={{ margin: "0 1rem" }}>Página {page}</span>
        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={items.length < PAGE_SIZE}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default App;
