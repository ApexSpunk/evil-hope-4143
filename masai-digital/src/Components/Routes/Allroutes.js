import { Routes, Route } from 'react-router-dom';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import Product from '../../Pages/Store/Product';
import Store from '../../Pages/Store/Store';
import Home from '../../Pages/Home/Home';
import Cart from '../../Pages/Cart/Cart';

function Allroutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/store' element={<Store />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
    );
}

export default Allroutes;