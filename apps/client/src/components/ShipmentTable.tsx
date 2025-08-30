import type { Shipment } from '@repo/types/shipment';
import './ShipmentTable.css';
import Table from './Table';
import { useShipmentList } from '../context/ShipmentListContext';
import ErrorCard from './ErrorCard';
import { Status } from '@repo/types/shipment-status';
import useUpdateShipment from '../utils/backend-hooks/useUpdateShipment';
import MarkAsDeliveredButton from './MarkAsDeliveredButton';

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
  const { shipsLoading, shipsError, shipments, updateShipmentInList } =
    useShipmentList();
  const { updateLoading, updateError, updateShipment } = useUpdateShipment();

  // create a mark as delivered button
  const HandleMarkAsDelivered = async (shipment: Shipment) => {
    const updatedShipment = await updateShipment(shipment.id);
    if (updatedShipment) {
      updateShipmentInList(updatedShipment);
    }
  };

  const addDeliveredColum = () => {
    return [
      ...shipmentColumns,
      {
        key: 'mark' as keyof Shipment,
        header: 'Mark as Delivered',
        render: (item: Shipment) => (
          <MarkAsDeliveredButton
            shipment={item}
            onClick={HandleMarkAsDelivered}
          ></MarkAsDeliveredButton>
        ),
      },
    ];
  };

  const loading = shipsLoading || updateLoading;
  const isError = shipsError || updateError;
  const showList = shipments && !isError;
  return (
    <div className={`ed-container ${loading ? 'loading' : ''}`}>
      {showList ? (
        <div className='container'>
          <Table data={shipments} columns={addDeliveredColum()} />
        </div>
      ) : (
        <ErrorCard errorMessage='Something happened while getting the list of employees.' />
      )}
    </div>
  );
};

export default ShipmentTable;
