import './App.css';
import Portfolio from './task1/Portfolio';
import { proects, filters } from './task1/data';
import Store from './task2/Store';
import products from './task2/data/products';

function App() {
  return (
    <div>
      <Portfolio proects={proects} filters={filters} />
      <Store products={products} />
    </div>
  );
}

export default App;
