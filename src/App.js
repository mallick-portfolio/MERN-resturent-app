import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddFood from './components/admin/AddFood/AddFood';
import FoodList from './components/admin/FoodList/FoodList';
import UpdateFood from './components/admin/UpdateFood/UpdateFood';
import Header from './components/Header/Header';
import Home from './screens/Home/Home';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin/add' element={<AddFood />} />
        <Route path='/admin/foods' element={<FoodList />} />
        <Route path='/admin/update/:id' element={<UpdateFood />} />
      </Routes>
    </div>
  );
}

export default App;
