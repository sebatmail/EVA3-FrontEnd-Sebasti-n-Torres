import React, { useState, useEffect } from 'react';
import { PostItForm } from './PostItForm';
import { PostIt } from './PostIt';
import { ErrorBoundary } from './ErrorBoundary';

export function PostItApp() {
  const [notas, setNotas] = useState([
    { id: 1, titulo: "Subir las notas", descripcion: "Antes de fin de\nsemestre", importante: false },
    { id: 2, titulo: "Regar las plantas", descripcion: "Dia por medio", importante: true },
    { id: 3, titulo: "Renovar Tarjeta", descripcion: "Antes de fin de mes\nque se esta por\nvencer.", importante: false },
    { id: 4, titulo: "Cambiar Aceite\nAuto", descripcion: "Preguntar a mi viejo\ndonde lo llevo.", importante: true },
    { id: 5, titulo: "Comprar Regalo", descripcion: "Buscar el fin de\nsemana para que\nllegue", importante: false },
    { id: 6, titulo: "Subir Material", descripcion: "Comprimir y subir los\ntutoriales", importante: false },
    { id: 7, titulo: "Ordenar 3er Piso", descripcion: "Mueble de las consolas", importante: false },
    { id: 8, titulo: "Ir al Aeropuerto", descripcion: "Proximo Miercoles 13\nhrs", importante: true }
  ]);

  useEffect(() => {
    const guardadas = localStorage.getItem('notas_react');
    if (guardadas) {
      const parseadas = JSON.parse(guardadas);
      if(parseadas.length > 0) {
        setNotas(parseadas);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notas_react', JSON.stringify(notas));
  }, [notas]);

  const agregarNota = (nota) => {
    setNotas([...notas, nota]);
  };

  const eliminarNota = (id) => {
    const nuevasNotas = notas.filter((n) => n.id !== id);
    setNotas(nuevasNotas);
  };

  return (
    <ErrorBoundary>
      <div>
        <div className="barra-superior">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-12 col-md-3">
                <h1 style={{ color: 'white', fontFamily: 'Arial, sans-serif', paddingLeft: '20px' }}>
                  Post It Simulator!
                </h1>
              </div>
              <div className="col-12 col-md-9">
                <PostItForm agregarNota={agregarNota} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="container-fluid post-it-board">
          <div className="row">
            {notas.map((nota) => (
              <div className="col-12 col-lg-3" key={nota.id}>
                <PostIt nota={nota} eliminarNota={eliminarNota} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
