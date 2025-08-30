import { ShipmentListProvider } from './context/ShipmentListContext';
import './App.css';
import Dashboard from './pages/Dashboard';

function App() {
  console.log('hello');
  return (
    <ShipmentListProvider>
      <Dashboard />
    </ShipmentListProvider>
  );
}

export default App;
