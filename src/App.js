import './App.css';
import { Route, Routes } from 'react-router-dom';
import Order from './pages/Order';
import Book from './pages/Book';
import Location from './pages/Book/Location';
import Summary from './pages/Book/Summary';

function App() {
  return (
    <Routes>
      <Route path="/order" element={<Order />} />
      <Route path="/order/:id" element={<Order />} />
      <Route path="/book" element={<Book />} />
      <Route path="/book/location" element={<Location />} />
      <Route path="/book/summary" element={<Summary />} />
    </Routes>
  );
}

export default App;
