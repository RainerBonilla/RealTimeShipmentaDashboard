import type { Shipment } from '@repo/types/shipment';
import './ShipmentTable.css';
import Table from './Table';
import { useShipmentList } from '../context/ShipmentListContext';
import ErrorCard from './ErrorCard';
import { Status } from '@repo/types/shipment-status';

const shipmentColumns = [
  { key: 'description' as keyof Shipment, header: 'Description' },
  { key: 'size' as keyof Shipment, header: 'Size (kg)' },
  {
    key: 'status' as keyof Shipment,
    header: 'Status',
    render: (item: Shipment) => (
      <span className={`statusCell ${Status[item.status.code]}`}>
        {item.status.name}
      </span>
    ),
  },
  { key: 'origin' as keyof Shipment, header: 'Origin' },
  { key: 'destination' as keyof Shipment, header: 'Destination' },
];

const ShipmentTable = () => {
  const { shipsLoading, shipsError, shipments } = useShipmentList();

  // create a mark as delivered button

  const showList = shipments && !shipsError;
  return (
    <div className={`ed-container ${shipsLoading ? 'loading' : ''}`}>
      {showList ? (
        <div className='container'>
          <Table data={shipments} columns={shipmentColumns} />
        </div>
      ) : (
        <ErrorCard errorMessage='Something happened while getting the list of employees.' />
      )}
    </div>
  );
};

export default ShipmentTable;
