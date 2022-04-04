import logo from './logo.svg';
import './App.css';
import ProductCard from './components/ProductCard/ProductCard';

const products = [
  {
    id:"1",
    name:"Palmerita1",
    units:30,
    url:"https://prod-mercadona.imgix.net/images/5e949a6f64b52be230b8f1084156dcd9.jpg?fit=crop&h=300&w=300",
  },
  {
    id:"2",
    name:"Palmerita2",
    units:15,
    url:"https://prod-mercadona.imgix.net/images/5e949a6f64b52be230b8f1084156dcd9.jpg?fit=crop&h=300&w=300",
  },
  {
    id:"3",
    name:"Palmerita3",
    units:20,
    url:"https://prod-mercadona.imgix.net/images/5e949a6f64b52be230b8f1084156dcd9.jpg?fit=crop&h=300&w=300",
  }

];
function App() {
  const lista = products.map((product)=>{

    return (
      <ProductCard key={product.id} product ={product}></ProductCard>
    )
  });
  return (
    <div className="app">{lista}</div>
  );
}

export default App;
