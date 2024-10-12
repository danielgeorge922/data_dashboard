import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Layout />}>
            <Route path ='/' element={<Dashboard />} />
            <Route path="products" element={<Products />} />
        </Route>

        
        <Route path = "login" element = {<h1>login</h1>}/>
      </Routes>
    </Router>
  );
}

export default App;
