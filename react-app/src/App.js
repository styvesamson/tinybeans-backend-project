import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Container from "@mui/material/Container";
import ButtonAppBar from './components/Appbar';
import Product from "./components/Product";
import Checkout from "./components/Checkout";
import Success from "./components/Success";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <ButtonAppBar/>
            <Container>
                <Routes>
                    <Route path="/" element={ <Product/>} />
                    <Route path="products/*" element={<Product/>} />
                    <Route path="checkout/:id" element={<Checkout/>} />
                    <Route path="success/*" element={<Success/>} />
                </Routes>
            </Container>
        </BrowserRouter>
    </div>
  );
}

export default App;
