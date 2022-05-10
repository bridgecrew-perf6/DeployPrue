import {BrowserRouter, Route , Switch} from 'react-router-dom';
import ActualizarProducto from './components/ActualizarProducto';
import NuevoProducto from './components/NuevoProducto';
import Producto from './components/Producto';
import TodosProductos from './components/TodosProductos';

const App = ()  => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <TodosProductos/>}/>
          <Route path="/nuevo" render={() => <NuevoProducto/>}/>
          <Route path="/producto/:id" exact render={() => <Producto />}/>
          <Route path="/producto/editar/:id"  render={() => <ActualizarProducto />}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
