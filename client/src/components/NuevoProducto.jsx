import React, {useState} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const NuevoProducto = () => {
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const guardarProducto = e => 
    {
        e.preventDefault();
        axios.post("http://localhost:8000/api/productos",
        {
            nombre,
            precio,
            descripcion
        })
            .then(res => 
                {
                    console.log(res);
                    history.push("/");
                })
            .catch(err => 
                {
                    setErrors(err.response.data.errors)
                });
    }

  return (
    <div>
        <form onSubmit={guardarProducto}>
            <h1>Nuevo Producto</h1>
            <div className="form-group">
                <label htmlFor='nombre'>Nombre</label>
                <input id='nombre'name='nombre' type="text" className="form-control" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
                {errors.nombre ? <span className='text-danger'>{errors.nombre.message}</span>: null}
            </div>
            <div className="form-group">
                <label htmlFor='precio'>Precio</label>
                <input  id="precio" name="precio" className="form-control" type="number" onChange={(e) => setPrecio(e.target.value)} value={precio}/>
            </div>
            <div className="form-group">
                <label htmlFor='descripcion'>Descripcion</label>
                <input  id="descripcion" name="descripcion" className="form-control" onChange={(e) => setDescripcion(e.target.value)} value={descripcion}/>
                {errors.descripcion ? <span className='text-danger'>{errors.descripcion.message}</span>: null}
            </div>
            <input type="submit" className="btn btn-success" value="Crear"/>
        </form>
    </div>
  )
}

export default NuevoProducto