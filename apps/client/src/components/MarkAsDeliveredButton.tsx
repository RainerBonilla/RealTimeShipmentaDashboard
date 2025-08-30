import type { Shipment } from '@repo/types/shipment';

type MarkAsDeliveredButtonProps = {
  shipment: Shipment;
  onClick: (shipment: Shipment) => Promise<void>;
};

const MarkAsDeliveredButton = ({
  shipment,
  onClick,
}: MarkAsDeliveredButtonProps) => {
  const handleClick = async () => {
    await onClick(shipment);
  };

  const displayButtom = !shipment.delivered && shipment.status.code === 2;
  return (
    <button disabled={!displayButtom} onClick={handleClick}>
      {shipment.delivered ? 'Delivered' : 'Deliver'}
    </button>
  );
};

export default MarkAsDeliveredButton;
