import { BrowserRouter } from 'react-router-dom';
import './App.css';
import PublicRoutes from './routes/PublicRoutes';
import AdminRoutes from './routes/AdminRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AdminRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
