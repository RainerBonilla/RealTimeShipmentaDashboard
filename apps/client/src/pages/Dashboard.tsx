import ShipmentTable from '../components/ShipmentTable';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <>
      <div className='hm-container'>
        <h1>Shipments Dashboard</h1>
        <h2>List of Shipments: </h2>
      </div>
      <ShipmentTable />
    </>
  );
};

export default Dashboard;
