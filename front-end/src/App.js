import './App.css';
import Header from './components/header/Header';
import Products from './components/products/Products';
import ProductScreen from './components/ProductScreen/ProductScreen'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
     <Header/>
     <Route exact path='/' component={Products} />
     <Route exact path='/:id' component={ProductScreen} />
     </Router>
    
    </div>
  );
}

export default App;
