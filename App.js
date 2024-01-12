import "./App.css";
import ProductProvider from './store/ProductContext';
import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductList';

function App() {
  return (
    <ProductProvider>
    <div>
      <h1>Shopping Cart App</h1>
      <AddProductForm />
      <ProductList />
    </div>
  </ProductProvider>
  );
}

export default App;
