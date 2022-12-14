import { Routes, Route } from 'react-router-dom';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';

function Allroutes() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    );
}

export default Allroutes;