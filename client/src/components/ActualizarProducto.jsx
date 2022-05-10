import React, {useState,useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const ActualizarProducto = () => 
{
  const {id} = useParams();
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [errors, setErrors] = useState({});
  const history = useHistory();

  useEffect(() => {
    axios.get("http://localhost:8000/api/productos/"+id)
      .then( res => 
        {
          console.log(res.data);
          setNombre(res.data.nombre);
          setPrecio(res.data.precio);
          setDescripcion(res.data.descripcion);
        })
      .catch(err => console.log(err));
  }, [id]);

  const actualizarProducto = e =>
  {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/productos/${id}`,
    {
      nombre,
      precio,
      descripcion
    })
      .then(res => history.push("/"))
      .catch(err => setErrors(err.response.data.errors) )
  }

  return (
    <div>
      <h1>Editar Producto</h1>
      <form onSubmit={actualizarProducto}>
        <div className="form-group">
          <label htmlFor='nombre'>Nombre</label>
          <input id='nombre'name='nombre' type="text" className="form-control" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
        </div>
        <div className="form-group">
          <label htmlFor='precio'>Precio</label>
          <input  id="precio" name="precio" className="form-control" type="number" onChange={(e) => setPrecio(e.target.value)} value={precio}/>
          {errors.nombre ? <span className='tex-danger'>{errors.nombre.message}</span>:null}
        </div>
        <div className="form-group">
          <label htmlFor='descripcion'>Descripcion</label>
          <input  id="descripcion" name="descripcion" className="form-control" onChange={(e) => setDescripcion(e.target.value)} value={descripcion}/>
          {errors.descripcion ? <span className='tex-danger'>{errors.descripcion.message}</span>:null}
        </div>
        <input type="submit" className="btn btn-success" value="Actualizar"/>
      </form>
    </div>
  )
}

export default ActualizarProducto