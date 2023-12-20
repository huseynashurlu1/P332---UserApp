import { BrowserRouter } from 'react-router-dom';
import './App.css';
import PublicRoutes from './routes/PublicRoutes';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <PublicRoutes />
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
